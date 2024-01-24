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
    "Alert Threshold",
    "Crop Coordinate X",
    "Crop Coordinate Y",
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
            return (
              <TableRow>
                <TableCell textAlign="center">
                  {camera?.Data[4]?.ScalarValue
                    ? camera?.Data[4]?.ScalarValue
                    : "-"}
                </TableCell>
                <TableCell>{camera?.Data[6].ScalarValue}</TableCell>
                <TableCell>
                  {toFriendlyTime(camera?.Data[6].ScalarValue)}
                </TableCell>
                <TableCell>{camera?.Data[3].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[2].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[0].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[1].ScalarValue}</TableCell>
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
