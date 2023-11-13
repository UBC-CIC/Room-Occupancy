import * as React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  return (
    <div className="container">
      <Header size="huge" color="blue" textAlign="center">
        <Header.Content>Analytics</Header.Content>
        <Header.Subheader color="blue">
          This page is under construction.
        </Header.Subheader>
      </Header>
    </div>
  );
}
