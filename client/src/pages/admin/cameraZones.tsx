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

type Props = {};

interface Camera {
  cam_id: string;
  Location: string;
  owner_id: number;
  crop_x1: number;
  crop_y1: number;
  crop_x2: number;
  crop_y2: number;
}

const CameraZonesComponent = (props: Props) => {
  const { camList, fetchCamList } = useGetCamList();

  const cameraListHeaders = [
    "Camera ID",
    "Camera Location",
    "Owner ID",
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
              {camList.map((camera: Camera) => (
                <TableRow key={camera.cam_id}>
                  <TableCell textAlign="center">{camera.cam_id}</TableCell>
                  <TableCell textAlign="center">{camera.Location}</TableCell>
                  <TableCell textAlign="center">{camera.owner_id}</TableCell>
                  <TableCell textAlign="center">
                    ({camera.crop_x1}, {camera.crop_y1})
                  </TableCell>
                  <TableCell textAlign="center">
                    ({camera.crop_x2}, {camera.crop_y2})
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
