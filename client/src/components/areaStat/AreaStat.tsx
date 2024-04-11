import React from "react";
import {
  Header,
  Icon,
  Progress,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import useCalculateOccupancy from "../../shared/hooks/useCalculateOccupancy";

type Props = {};

const AreaStat = (props: Props) => {
  const { cameraOccupancyInfo } = useCalculateOccupancy();

  const alertTableHeaders = [
    "Location",
    "Camera",
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

      {cameraOccupancyInfo.length === 0 ? (
        <Progress percent={100} indicating>
          Loading
        </Progress>
      ) : (
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
              if (
                isNaN(item?.remainingCapacity) ||
                item?.maxOccupancyThreshold <= item?.currentOccupancy
              ) {
                return (
                  <TableRow error>
                    <TableCell>{item?.location}</TableCell>
                    <TableCell>{item?.camera_id}</TableCell>
                    <TableCell>{item?.maxOccupancyThreshold}</TableCell>
                    <TableCell>{item?.currentOccupancy}</TableCell>
                    <TableCell>{item?.remainingCapacity}</TableCell>
                  </TableRow>
                );
              }
              return (
                <TableRow>
                  <TableCell>{item?.location}</TableCell>
                  <TableCell>{item?.camera_id}</TableCell>
                  <TableCell>{item?.maxOccupancyThreshold}</TableCell>
                  <TableCell>{item?.currentOccupancy}</TableCell>
                  <TableCell>{item?.remainingCapacity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </Segment>
  );
};

export default AreaStat;
