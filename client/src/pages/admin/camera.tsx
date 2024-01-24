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
} from "semantic-ui-react";
import { toFriendlyTime } from "../../shared/helpers/utility";

type Props = {};

const CameraComponent = (props: Props) => {
  const cameraListHeaders = [
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
        <Header>Camera Information</Header>
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
      <Header>Camera Information</Header>

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
                <TableCell>{camera?.Data[6].ScalarValue}</TableCell>
                <TableCell>
                  {toFriendlyTime(camera?.Data[5].ScalarValue)}
                </TableCell>
                <TableCell>{camera?.Data[3].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[2].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[0].ScalarValue}</TableCell>
                <TableCell>{camera?.Data[1].ScalarValue}</TableCell>
                <TableCell>
                  <Label color="green">Active</Label>
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
