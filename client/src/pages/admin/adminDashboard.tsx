import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import {
  Header,
  Grid,
  GridColumn,
  Divider,
  HeaderSubheader,
} from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useGetUserAttributes } from "../../shared/hooks/useGetUserAttributes";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import AreaStats from "../../components/areaStat/AreaStat";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import useCalculateOccupancy from "../../shared/hooks/useCalculateOccupancy";

export interface IAdminDashboardProps {}

function AdminDashboardComponent(props: IAdminDashboardProps) {
  const { user } = useGetUserAttributes();
  const { cameraOccupancyInfo } = useCalculateOccupancy();

  const columnWidth = `${100 / cameraOccupancyInfo.length}%`;
  const columns = cameraOccupancyInfo.map((occu: any) => (
    <GridColumn key={occu?.camera_id} style={{ width: columnWidth }}>
      <AnalyticSatistic
        header="Current Occupancy"
        statisticLabel={`${occu?.location} - ${occu?.camera_id}`}
        statisticValue={occu?.currentOccupancy}
        style={{ width: columnWidth }}
      />
    </GridColumn>
  ));

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Admin Dashboard
        <HeaderSubheader>Welcome {user?.name}!</HeaderSubheader>
      </Header>

      <Grid>
        <Grid.Column width={11}>
          <Grid>
            <Grid.Row>{columns}</Grid.Row>
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
    </AdminDashboardLayout>
  );
}

export const AdminDashboard = withAuthenticator(AdminDashboardComponent, {
  hideSignUp: true,
});
