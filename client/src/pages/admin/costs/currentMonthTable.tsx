import React from "react";
import {
  Header,
  Progress,
  Segment,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { USDollar } from "../costsAndUsage";
import { useExploreCosts } from "../../../shared/hooks/useExploreCosts";

type Props = {};

const CurrentMonthTable = (props: Props) => {
  const alertTableHeaders = ["Service", "Cost"];
  const { costs } = useExploreCosts();
  const processedData = React.useMemo(() => {
    const TableData = costs.current_month_costs?.ResultsByTime[0]?.Groups.map(
      (service: any) => ({
        label: service.Keys[0],
        data: service.Metrics.UnblendedCost.Amount,
      })
    );
    return TableData?.filter((service: any) => parseFloat(service.data) !== 0);
  }, [costs]);

  if (!processedData) {
    return (
      <Progress percent={100} indicating>
        Loading
      </Progress>
    );
  }

  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          AWS Service Costs
          <Header.Subheader>View Service Costs</Header.Subheader>
        </Header.Content>
      </Header>

      <Table celled>
        <TableHeader>
          <TableRow>
            {alertTableHeaders.map((header) => {
              return <TableHeaderCell>{header}</TableHeaderCell>;
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {processedData?.map((item: any) => {
            return (
              <TableRow>
                <TableCell>{item?.label}</TableCell>
                <TableCell>{USDollar.format(item?.data)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Segment>
  );
};

export default CurrentMonthTable;
