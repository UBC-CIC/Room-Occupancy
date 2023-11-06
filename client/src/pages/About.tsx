import * as React from "react";
import { Header } from "semantic-ui-react";
import "../App.css";

import Woody from "../assets/images/team/woody.png";
import Colin from "/assets/images/team/colin.jpg";
import Steve from "/assets/images/team/steve.jpg";
import Cassiel from "/assets/images/team/cassiel.png";
import Danny from "/assets/images/team/danny.png";

export interface IAboutProps {}

// todo: make team information interface

export function About(props: IAboutProps) {
  const teamInformation = [];
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>Real Time Occupancy Management</Header.Content>
        <Header.Subheader color="blue">About Us</Header.Subheader>
      </Header>
    </div>
  );
}
