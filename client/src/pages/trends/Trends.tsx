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
} from "semantic-ui-react";
import "../analytics/Analytics.css";
import { DashboardLayout } from "../../components/layout/dashboard/index";
import { useGetCamList } from "../../shared/hooks/useGetCamList";
import { ICameraInfo } from "../../shared/helpers/interfaces";
import { useGetFilteredOccupancy } from "../../shared/hooks/useGetFilteredOccupancy";

export interface IAnalyticsProps {}

export function Trends(props: IAnalyticsProps) {
  const [activeCamera, setActiveCamera] = useState<string>("");
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
          <Header size="small">Choose Camera Location</Header>
          <FormGroup inline>
            <FormSelect
              onChange={(e, v) => {
                if (typeof v.value === "string") setActiveCamera(v.value);
              }}
              options={cameraOptions}
              placeholder="Camera"
            />
            <FormButton
              onClick={() => {
                fetchFilteredOccupancyList();
                console.log("filter", filteredOccupancyList);
              }}
              content="Submit"
            />
          </FormGroup>
        </Form>
        <Divider />
      </Segment>
    </DashboardLayout>
  );
}
