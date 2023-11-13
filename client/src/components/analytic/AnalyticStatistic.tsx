import * as React from "react";
import { Segment, Header, Icon, Statistic } from "semantic-ui-react";

interface IAnalyticSatisticProps {
  header: string;
  statisticValue: number;
  statisticLabel: string;
}

export function AnalyticSatistic(props: IAnalyticSatisticProps) {
  const { header, statisticValue, statisticLabel } = props;

  return (
    <Segment compact textAlign="center">
      <Header as="h4">
        <Icon name="users" color="grey" />
        <Header.Content>{header}</Header.Content>
      </Header>
      <Statistic color="blue">
        <Statistic.Value>
          {statisticValue.toLocaleString("en-US")}
        </Statistic.Value>
        <Statistic.Label>{statisticLabel}</Statistic.Label>
      </Statistic>
    </Segment>
  );
}
