import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Header, Grid, Divider, HeaderSubheader } from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useGetUserAttributes } from "../../shared/hooks/useGetUserAttributes";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import Alerts from "../../components/alerts/Alerts";
import { AnalyticsFeedBar } from "../../components/analytic/AnalyticsFeedBar";
import { useGetOccupancy } from "../../shared/hooks/useGetOccupancy";

export interface IAdminDashboardProps {}

function AdminDashboardComponent(props: IAdminDashboardProps) {
  const { user } = useGetUserAttributes();
  const { occupancyList } = useGetOccupancy();

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Admin Dashboard
        <HeaderSubheader>Welcome {user?.name}!</HeaderSubheader>
      </Header>

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
            <Alerts></Alerts>
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
