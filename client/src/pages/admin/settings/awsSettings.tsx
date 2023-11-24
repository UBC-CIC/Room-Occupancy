import React from "react";
import { useState } from "react";
import {
  Tab,
  Form,
  Button,
  Header,
  Image,
  Table,
  Grid,
  Label,
} from "semantic-ui-react";
import { AWSSettingForm } from "./awsSettingForm";

type Props = {};

export const AwsSettings = (props: Props) => {
  const [open, setOpen] = useState(false);
  const headers = ["Camera ID", "Zone", "Current Setting", "Update"];
  const body = [
    {
      cameraID: "ASD6TH-2",
      zone: "1 - Orchard Commons",
      currentSettings: "3 photos / sec",
      update: <AWSSettingForm open={open} setOpen={setOpen}></AWSSettingForm>,
    },
  ];

  return (
    <Tab.Pane>
      <Header>AWS Configuration</Header>
      <Table celled columns={4}>
        <Table.Header>
          <Table.Row>
            {headers.map((header, key) => {
              return <Table.HeaderCell key={key}>{header}</Table.HeaderCell>;
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {body.map((item, key) => {
            return (
              <Table.Row key={key}>
                <Table.Cell>{item.cameraID}</Table.Cell>
                <Table.Cell>{item.zone}</Table.Cell>
                <Table.Cell>{item.currentSettings}</Table.Cell>
                <Table.Cell>{item.update}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Tab.Pane>
  );
};
