import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { AdminDashboardLayout } from "../../../components/layout/admin";
import {
  Dimmer,
  Header,
  Loader,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Image,
  HeaderSubheader,
} from "semantic-ui-react";
import { useGetCamList } from "../../../shared/hooks/useGetCamList";
import { CameraAlertsForm } from "./cameraAlertsForm";

type Props = {};

const CameraAlertsComponent = (props: Props) => {
  const cameraListHeaders = [
    "Camera Location",
    "Owner ID",
    "Alert Threshold",
    "",
  ];
  const { camList, fetchCamList } = useGetCamList();

  if (camList.length === 0)
    return (
      <AdminDashboardLayout>
        <Header as="h2">
          Alert Thresholds
          <HeaderSubheader>
            Configure and manage alert threshold for each camera zone
          </HeaderSubheader>
        </Header>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Fetching Alert Threshold Data" />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Alert Thresholds
        <HeaderSubheader>
          Configure and manage alert threshold for each camera zone
        </HeaderSubheader>
      </Header>

      <Table celled>
        <TableHeader>
          <TableRow>
            {cameraListHeaders.map((header) => {
              return <TableHeaderCell>{header}</TableHeaderCell>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {camList.map((camera: any, key: string) => {
            return (
              <TableRow key={key}>
                <TableCell>{camera?.Location}</TableCell>
                <TableCell>{camera?.owner_id}</TableCell>
                <TableCell>{camera?.alert_thre}</TableCell>
                <TableCell>
                  <CameraAlertsForm
                    cam_id={camera?.cam_id}
                    fetchCamList={fetchCamList}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </AdminDashboardLayout>
  );
};

export const CameraAlerts = withAuthenticator(CameraAlertsComponent, {
  hideSignUp: true,
});
