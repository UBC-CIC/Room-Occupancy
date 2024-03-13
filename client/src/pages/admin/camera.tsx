import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { useGetCamList } from "../../shared/hooks/useGetCamList";
import {
  Dimmer,
  Header,
  Label,
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
  Popup,
} from "semantic-ui-react";
import { toFriendlyTime } from "../../shared/helpers/utility";
import { ICameraInfo } from "../../shared/helpers/interfaces";

type Props = {};

interface coreDeviceStatus {
  healthy: {
    type: string;
    content: string;
  };
  unhealthy: {
    type: string;
    content: string;
  };
}

const coreDeviceStatus: coreDeviceStatus = {
  healthy: {
    type: "HEALTHY",
    content:
      "The AWS IoT Greengrass Core software and all components are running without issue on this core device.",
  },
  unhealthy: {
    type: "UNHEALTHY",
    content:
      "The AWS IoT Greengrass Core software or a component is in a failed state on this core device. To troubleshoot, view the logs on this core device.",
  },
};

const CameraComponent = (props: Props) => {
  const cameraListHeaders = [
    "Camera Name",
    "Camera Location",
    "Time Installed",
    "Owner",
    "Crop Coordinate (X1, Y1)",
    "Crop Coordinate (X2, Y2)",
    "Status",
  ];
  const { camList } = useGetCamList();

  if (camList.length === 0)
    return (
      <AdminDashboardLayout>
        <Header as="h2">
          Camera Information
          <HeaderSubheader>
            View camera information and obtain real time status updates on IoT
            Devices
          </HeaderSubheader>
        </Header>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Fetching Camera Data" />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Camera Information
        <HeaderSubheader>
          View camera information and obtain real time status updates on IoT
          Devices
        </HeaderSubheader>
      </Header>

      <Table celled>
        <TableHeader>
          <TableRow>
            {cameraListHeaders.map((header: string) => {
              return <TableHeaderCell>{header}</TableHeaderCell>;
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {camList.map((camera: ICameraInfo) => {
            return (
              <TableRow>
                <TableCell textAlign="center">{camera?.cam_name}</TableCell>
                <TableCell>{camera?.Location}</TableCell>
                <TableCell>{toFriendlyTime(camera?.time_add)}</TableCell>
                <TableCell>{camera?.owner}</TableCell>
                <TableCell>
                  ({Math.round(camera?.crop_x1)}, {Math.round(camera?.crop_y1)})
                </TableCell>
                <TableCell>
                  ({Math.round(camera?.crop_x2)}, {Math.round(camera?.crop_y2)})
                </TableCell>
                <TableCell>
                  {camera?.status === coreDeviceStatus.healthy.type ? (
                    <Popup
                      content={coreDeviceStatus.healthy.content}
                      trigger={<Label color="green">Healthy</Label>}
                    />
                  ) : (
                    <Popup
                      content={coreDeviceStatus.unhealthy.content}
                      trigger={<Label color="red">Unhealthy</Label>}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </AdminDashboardLayout>
  );
};

export const Camera = withAuthenticator(CameraComponent, {
  hideSignUp: true,
});
