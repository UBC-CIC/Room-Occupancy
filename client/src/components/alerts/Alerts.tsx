import React from "react";
import {
  Header,
  Icon,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { CameraZoneForm } from "../../pages/admin/cameraZoneForm";
import { Label } from "@aws-amplify/ui-react";
import { useGetOccupancy } from "../../shared/hooks/useGetOccupancy";
import useCalculateOccupancy from "../../shared/hooks/useCalculateOccupancy";

type Props = {};

const Alerts = (props: Props) => {
  const { cameraOccupancyInfo } = useCalculateOccupancy();

  const alertTableHeaders = [
    "Location",
    "Room Max Occupancy",
    "Current Occupancy",
    "Remaining Capacity",
  ];
  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          Occupancy
          <Header.Subheader>
            View room occupancy and remaning capacity information
          </Header.Subheader>
        </Header.Content>
      </Header>

      <Table celled>
        <TableHeader>
          <TableRow>
            {alertTableHeaders.map((header) => {
              return <TableHeaderCell>{header}</TableHeaderCell>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {cameraOccupancyInfo.map((item: any) => {
            if (isNaN(item?.remainingCapacity) || item?.remainingCapacity < 0) {
              return (
                <TableRow error>
                  <TableCell>{item?.camera_id}</TableCell>
                  <TableCell>{item?.maxOccupancyThreshold}</TableCell>
                  <TableCell>{item?.currentOccupancy}</TableCell>
                  <TableCell>
                    <Icon name="attention" />
                    {item?.remainingCapacity}
                  </TableCell>
                </TableRow>
              );
            }
            return (
              <TableRow>
                <TableCell>{item?.camera_id}</TableCell>
                <TableCell>{item?.maxOccupancyThreshold}</TableCell>
                <TableCell>{item?.currentOccupancy}</TableCell>
                <TableCell>{item?.remainingCapacity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Segment>
  );
};

export default Alerts;
