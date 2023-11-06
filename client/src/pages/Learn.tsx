import * as React from "react";
import { Header } from "semantic-ui-react";
import "../App.css";

export interface ILearnProps {}

export function Learn(props: ILearnProps) {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>Real Time Occupancy Management</Header.Content>
        <Header.Subheader color="blue">Learn</Header.Subheader>
      </Header>
    </div>
  );
}
