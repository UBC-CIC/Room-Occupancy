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
} from "semantic-ui-react";
import { toFriendlyTime } from "../../shared/helpers/utility";

type Props = {};

const CameraComponent = (props: Props) => {
  const cameraListHeaders = [
    "Camera ID",
    "Camera Location",
    "Time Installed",
    "Owner ID",
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
            {cameraListHeaders.map((header) => {
              return <TableHeaderCell>{header}</TableHeaderCell>;
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {camList.map((camera: any) => {
            console.log("camera", camera);
            return (
              <TableRow>
                <TableCell textAlign="center">{camera?.cam_id}</TableCell>
                <TableCell>{camera?.Location}</TableCell>
                <TableCell>{toFriendlyTime(camera?.time_add)}</TableCell>
                <TableCell>{camera?.owner_id}</TableCell>
                <TableCell>
                  ({camera?.crop_x1}, {camera?.crop_y1})
                </TableCell>
                <TableCell>
                  ({camera?.crop_x2}, {camera?.crop_y2})
                </TableCell>
                <TableCell>
                  <Label color="red">Inactive</Label>
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
