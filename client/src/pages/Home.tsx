import * as React from "react";
import { Header, Image, Button, Segment } from "semantic-ui-react";
import dashboard from "../assets/images/dashboard.png";
import learn from "../assets/images/learn_2.png";
import "../App.css";
import { Link } from "react-router-dom";
import { CommonLayout } from "../components/layout/common";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header as="h1" textAlign="center" color="blue">
          <Header.Content>Occupancy Management</Header.Content>
          <Header.Subheader color="blue">
            Utilize IoT devices manage occupancy <br />
            Making spaces work for everyone
          </Header.Subheader>
        </Header>
        <Segment basic>
          <Image centered size="big" src={learn} />
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
