import React from "react";
import { Grid, Divider } from "semantic-ui-react";
import "./Analytics.css";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import { DashboardLayout } from "../../components/layout/dashboard/index";
import AreaStats from "../../components/areaStat/AreaStat";
import { useGetOccupancy } from "../../shared/hooks/useGetOccupancy";

export interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  const { occupancyList } = useGetOccupancy();
  return (
    <DashboardLayout>
      <Grid>
        <Grid.Column width={11}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Camera 1 - PI 2"
                  statisticValue={occupancyList[0]?.Data[4].ScalarValue.toString()}
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Camera 2 - UNDEFINED"
                  statisticValue={"-"}
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Current Occupancy"
                  statisticLabel="Camera 3 - Undefined"
                  statisticValue={"-"}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid.Row>
            <AreaStats></AreaStats>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={5}>
          <AnalyticsFeedBar />
        </Grid.Column>
      </Grid>
    </DashboardLayout>
  );
}
