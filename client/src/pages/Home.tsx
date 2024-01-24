import * as React from "react";
import { Header, Image, Button, Segment } from "semantic-ui-react";
import dashboard from "../assets/images/dashboard.png";
import "../App.css";
import { Link } from "react-router-dom";
import { CommonLayout } from "../components/layout/common";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header as="h1" textAlign="center">
          <Header.Content>Real Time Occupancy Management</Header.Content>
          <Header.Subheader color="blue">
            Utilize IoT devices to understand and analyze occupancy in areas
          </Header.Subheader>
        </Header>
        <Segment basic>
          <Image centered size="big" src={dashboard} />
        </Segment>
        <Link to="analytics">
          <Button circular color="blue">
            Check Analytics
          </Button>
        </Link>
      </div>
    </CommonLayout>
  );
}
