import React from "react";
import {
  Grid,
  Image,
  Segment,
  Dimmer,
  Loader,
  Divider,
} from "semantic-ui-react";
import "./Analytics.css";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import { DashboardLayout } from "../../components/layout/dashboard/index";

export interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  return (
    <DashboardLayout>
      <Grid>
        <Grid.Column width={11}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Zone 1 - Orchard Commons"
                  statisticValue={20}
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Zone 2 - Totem Park"
                  statisticValue={5}
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Zone 3 - Orchard Commons"
                  statisticValue={165}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid.Row>
            <Segment>
              <Dimmer active>
                <Loader size="massive">Work in Progress</Loader>
              </Dimmer>

              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Segment>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={5}>
          <AnalyticsFeedBar />
        </Grid.Column>
      </Grid>
    </DashboardLayout>
  );
}
