import * as React from "react";
import { Header } from "semantic-ui-react";
import "../App.css";

export interface IErrorProps {}

export function Error(props: IErrorProps) {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>Real Time Occupancy Management</Header.Content>
        <Header.Subheader color="blue">404! NOT FOUND!</Header.Subheader>
      </Header>
    </div>
  );
}
