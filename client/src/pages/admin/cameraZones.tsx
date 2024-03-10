import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { useGetCamList } from "../../shared/hooks/useGetCamList";
import { CameraZoneForm } from "./cameraZoneForm";
import {
  Header,
  HeaderSubheader,
  Segment,
  Dimmer,
  Loader,
  Image,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { ICameraInfo } from "../../shared/helpers/interfaces";
type Props = {};

const CameraZonesComponent = (props: Props) => {
  const { camList, fetchCamList } = useGetCamList();

  const cameraListHeaders = [
    "Camera Name",
    "Camera Location",
    "Owner",
    "Crop Coordinate (X1, Y1)",
    "Crop Coordinate (X2, Y2)",
    "",
  ];

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Camera Zones
        <HeaderSubheader>
          View and update camera zone information
        </HeaderSubheader>
      </Header>

      {camList.length === 0 ? (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Fetching Camera Data" />
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : (
        <>
          <Table celled>
            <TableHeader>
              <TableRow>
                {cameraListHeaders.map((header) => (
                  <TableHeaderCell key={header} textAlign="center">
                    {header}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>

              {camList.map((camera: ICameraInfo) => (
                <TableRow key={camera.cam_name}>
                  <TableCell textAlign="center">{camera.cam_name}</TableCell>
                  <TableCell textAlign="center">{camera.Location}</TableCell>
                  <TableCell textAlign="center">{camera.owner}</TableCell>
                  <TableCell textAlign="center">
                    ({Math.round(camera?.crop_x1)},{" "}
                    {Math.round(camera?.crop_y1)})
                  </TableCell>
                  <TableCell textAlign="center">
                    ({Math.round(camera?.crop_x2)},{" "}
                    {Math.round(camera?.crop_y2)})
                  </TableCell>
                  <TableCell textAlign="center">
                    <CameraZoneForm
                      cameraInfo={camera}
                      fetchCamList={fetchCamList}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </AdminDashboardLayout>
  );
};

export const CameraZones = withAuthenticator(CameraZonesComponent, {
  hideSignUp: true,
});
