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

type Props = {};

const Alerts = (props: Props) => {
  const alertTableHeaders = ["Date", "Severity", "Alert Type", "Remarks"];
  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          Alerts - BETA (WORK IN PROGRESS)
          <Header.Subheader>View Occupancy and Camera Alerts</Header.Subheader>
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
          <TableRow>
            <TableCell>08-02-2024</TableCell>
            <TableCell>
              <Label color="red">
                <Icon name="warning circle" /> High
              </Label>
            </TableCell>
            <TableCell>Camera Issue</TableCell>
            <TableCell>Camera ID: 1 Inactive</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>08-02-2024</TableCell>
            <TableCell>
              <Label color="orange">
                <Icon name="warning sign" /> Medium
              </Label>
            </TableCell>
            <TableCell>Occupancy Threshold</TableCell>
            <TableCell>Zone 1 at maximum occupancy</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Segment>
  );
};

export default Alerts;
