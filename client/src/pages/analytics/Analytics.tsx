import React from "react";
import { Grid, Divider, GridColumn } from "semantic-ui-react";
import "./Analytics.css";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import { DashboardLayout } from "../../components/layout/dashboard/index";
import AreaStats from "../../components/areaStat/AreaStat";
import useCalculateOccupancy from "../../shared/hooks/useCalculateOccupancy";

export interface IAnalyticsProps {}

export function Analytics(props: IAnalyticsProps) {
  const { cameraOccupancyInfo } = useCalculateOccupancy();

  const columnWidth = `${100 / cameraOccupancyInfo.length}%`;
  const columns = cameraOccupancyInfo.map((occu:any) => (
    <GridColumn key={occu?.camera_id} style={{ width: columnWidth }}>
      <AnalyticSatistic
        header = "Current Occupancy"
        statisticLabel={`${occu?.location} - ${occu?.camera_id}`}
        statisticValue={occu?.currentOccupancy}
        style={{ width: columnWidth }}
      />
    </GridColumn>
  ));

  return (
    <DashboardLayout>
      <Grid>
        <Grid.Column width={11}>
          <Grid>
          <Grid.Row>
              {columns}
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
