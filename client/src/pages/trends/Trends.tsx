import React, { useEffect, useState } from "react";
import {
  Divider,
  Header,
  HeaderSubheader,
  Segment,
  Form,
  FormGroup,
  FormSelect,
  FormButton,
  Progress,
} from "semantic-ui-react";
import "../analytics/Analytics.css";
import { DashboardLayout } from "../../components/layout/dashboard/index";
import { useGetCamList } from "../../shared/hooks/useGetCamList";
import { ICameraInfo } from "../../shared/helpers/interfaces";
import { useGetFilteredOccupancy } from "../../shared/hooks/useGetFilteredOccupancy";
import TrendChart from "./TrendChart";

export interface IAnalyticsProps {}

export function Trends(props: IAnalyticsProps) {
  const [activeCamera, setActiveCamera] = useState<string>("");
  const [showChart, setShowChart] = useState<boolean>(false);
  const { filteredOccupancyList, fetchFilteredOccupancyList } =
    useGetFilteredOccupancy(activeCamera);

  const [cameraOptions, setCameraOptions] = useState<
    { key: number; text: string; value: string }[]
  >([]);

  const { camList } = useGetCamList();
  const buildCameraOptions = (camList: ICameraInfo[]) => {
    const options = camList.map((camera: ICameraInfo, key: number) => {
      return {
        key: key,
        text: camera.cam_name,
        value: camera.cam_name,
      };
    });

    setCameraOptions(options);
  };
  useEffect(() => {
    buildCameraOptions(camList);
  }, [camList]);

  return (
    <DashboardLayout>
      <Header as="h2">
        Trends
        <HeaderSubheader>
          View historical data and occupancy trends based on location, based on
          the last 90 days.
        </HeaderSubheader>
      </Header>
      <Segment>
        <Form>
          <Header size="small">Choose Camera Location and Submit</Header>
          <FormGroup inline>
            {cameraOptions.length === 0 ? (
              <FormSelect disabled options={[]} placeholder="Loading" />
            ) : (
              <FormSelect
                onChange={(e, v) => {
                  if (typeof v.value === "string") setActiveCamera(v.value);
                  setShowChart(false);
                }}
                options={cameraOptions}
                placeholder="Camera"
              />
            )}

            {cameraOptions.length !== 0 && (
              <FormButton
                onClick={async () => {
                  setShowChart(false);
                  await fetchFilteredOccupancyList();
                  setShowChart(true);
                }}
                content="Submit"
                color="blue"
              />
            )}
          </FormGroup>
        </Form>
        <Divider />
        {!showChart && activeCamera !== "" && (
          <Progress percent={100} indicating>
            Loading... Have you clicked Submit?
          </Progress>
        )}
        {activeCamera !== "" &&
          filteredOccupancyList !== undefined &&
          showChart && (
            <TrendChart
              data={filteredOccupancyList}
              camera={activeCamera}
              showChart={showChart}
            />
          )}
      </Segment>
    </DashboardLayout>
  );
}
