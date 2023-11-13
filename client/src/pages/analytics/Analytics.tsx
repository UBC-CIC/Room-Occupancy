import * as React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Analytics.css";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import { AnalyticsSidebar } from "../../components/analytic/AnalyticsSidebar";

export interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  return (
    <Grid className="dashboardContainer">
      <Grid.Column className="sidebarContainer" width={3}>
        <AnalyticsSidebar />
      </Grid.Column>

      <Grid.Column width={13}>
        <Grid>
          <Grid.Column width={11}>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <AnalyticSatistic
                    header="Current Occupancy"
                    statisticLabel="Zone 1"
                    statisticValue={5550}
                  />
                </Grid.Column>
                <Grid.Column>
                  <AnalyticSatistic
                    header="Current Occupancy"
                    statisticLabel="Zone 1"
                    statisticValue={5550}
                  />
                </Grid.Column>
                <Grid.Column>
                  <AnalyticSatistic
                    header="Current Occupancy"
                    statisticLabel="Zone 1"
                    statisticValue={5550}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Row>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={5}>
            <AnalyticsFeedBar />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}
