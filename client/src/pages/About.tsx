import * as React from "react";
import { Header } from "semantic-ui-react";
import "../App.css";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>Real Time Occupancy Management</Header.Content>
        <Header.Subheader color="blue">About Us</Header.Subheader>
      </Header>
    </div>
  );
}
