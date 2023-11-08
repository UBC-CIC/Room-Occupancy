import * as React from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import "../App.css";
import learn from "../assets/images/learn_1.png";

export interface ILearnProps {}

export function Learn(props: ILearnProps) {
  return (
    <div className="container">
      <Header color="blue" as="h1" textAlign="center">
        <Header.Content>Learn</Header.Content>
      </Header>
      <br />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            The UBC Cloud Innovation Center seeks a cutting-edge solution to
            address the challenge of real-time people counting and occupancy
            monitoring in spaces, such as rooms or traffic areas. This solution
            should utilize IoT devices, an open-source image processor, and
            cloud services to accurately count and track the number of people in
            these areas. The data gathered should be presented via a
            user-friendly interface that efficiently conveys information.
          </Grid.Column>
          <Grid.Column>
            <Image size="big" src={learn} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
