import * as React from "react";
import { Header, Grid, Image, Divider, Icon } from "semantic-ui-react";
import "../App.css";
import learn from "../assets/images/learn_2.png";
import solution from "../assets/images/solution_overview.png";
import { CommonLayout } from "../components/layout/common";

export interface ILearnProps {}

const YoutubeEmbed = (embedId: any) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export function Learn(props: ILearnProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header color="blue" as="h1" textAlign="center">
          <Header.Content>Learn </Header.Content>
        </Header>
        <br />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <b>
                Have you ever found yourself wandering around a busy public
                area, searching for a quiet study space or a place to eat, only
                to realize everything is already taken?
              </b>
              <br />
              In a world as connected as ours, why is it still so hard to know
              how crowded these places are before we get there? We have
              implemented an IoT solution employing an edge device fitted with a
              camera, transmitting images to our deep learning model for
              comprehensive analysis. The resulting occupancy data is stored
              within a database and seamlessly presented on a user-friendly web
              application powered by React.
              <br />
              This setup empowers users to effortlessly monitor real-time
              occupancy statistics with just a few clicks, facilitating timely
              decision-making. Our solution not only displays current occupancy
              but also provides historical occupancy trends of the past 3 months
              for users, allows administrators to select specific sub-areas to
              monitor occupancy and view cost.
              <br />
              <Divider />
              <Image size="big" src={solution} />
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Image size="big" src={learn} />
              <h1>
                Watch our{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=HE247-tzySw"
                >
                  video!
                </a>
              </h1>
              <h1>
                Checkout the opensource{" "}
                <a
                  target="_blank"
                  href="https://github.com/UBC-CIC/Room-Occupancy"
                >
                  code!
                </a>
              </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </CommonLayout>
  );
}
