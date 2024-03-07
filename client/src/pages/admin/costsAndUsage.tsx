import { withAuthenticator } from "@aws-amplify/ui-react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import {
  Dimmer,
  Header,
  Loader,
  Segment,
  Image,
  HeaderSubheader,
  Divider,
  Grid,
  Progress,
} from "semantic-ui-react";
import { useExploreCosts } from "../../shared/hooks/useExploreCosts";
import { AnalyticSatistic } from "../../components/analytic/AnalyticStatistic";
import CurrentMonthChart from "./costs/currentMonthChart";
import CurrentMonthTable from "./costs/currentMonthTable";

type Props = {};

export let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CostsandUsageComponent = (props: Props) => {
  const { costs } = useExploreCosts();

  if (costs.length === 0)
    return (
      <AdminDashboardLayout>
        <Header as="h2">
          Cost and Usage Information
          <HeaderSubheader>
            Visualize, manage, and understand your AWS costs and usage. Compare
            your current and previous month's costs, and view a cost breakdown
            for each of your AWS services.
          </HeaderSubheader>
        </Header>
        <Segment>
          <Progress percent={100} indicating>
            Fetching Costs Data
          </Progress>
        </Segment>
      </AdminDashboardLayout>
    );

  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Cost and Usage Information
        <HeaderSubheader>
          Visualize, manage, and understand your AWS costs and usage. Compare
          your current and previous month's costs, and view a cost breakdown for
          each of your AWS services.
        </HeaderSubheader>
      </Header>

      <Grid>
        <Grid.Column width={11}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <AnalyticSatistic
                  header="Average Month Costs"
                  statisticLabel={`${costs?.dates?.start_of_last_month} to ${costs?.dates?.end_of_last_month}`}
                  statisticValue={USDollar.format(costs?.average_month_costs)}
                  icon="dollar sign"
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Total Cost"
                  statisticLabel={`${costs?.dates?.start_of_last_month} to ${costs?.dates?.end_of_last_month}`}
                  statisticValue={USDollar.format(costs?.total_cost)}
                  icon="dollar sign"
                />
              </Grid.Column>
              <Grid.Column>
                <AnalyticSatistic
                  header="Previous Month Costs"
                  statisticLabel={`${costs?.dates?.start_of_last_month} to ${costs?.dates?.end_of_last_month}`}
                  statisticValue={USDollar.format(costs?.last_month_costs)}
                  icon="dollar sign"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid.Row>
            <Header as="h4">
              <Header.Content>
                Cost Per Service
                <Header.Subheader>
                  View the costs per AWS Service from{" "}
                  {costs?.dates?.start_of_last_month} to{" "}
                  {costs?.dates?.end_of_last_month}
                </Header.Subheader>
              </Header.Content>
            </Header>
            <CurrentMonthChart />
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={5}>
          <CurrentMonthTable />
        </Grid.Column>
      </Grid>
    </AdminDashboardLayout>
  );
};

export const CostsAndUsage = withAuthenticator(CostsandUsageComponent, {
  hideSignUp: true,
});
