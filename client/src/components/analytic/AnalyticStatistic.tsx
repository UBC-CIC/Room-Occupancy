import * as React from "react";
import {
  Segment,
  Header,
  Icon,
  Statistic,
  SemanticICONS,
} from "semantic-ui-react";

interface IAnalyticSatisticProps {
  header: string;
  statisticValue: number | string;
  statisticLabel: string;
  icon?: SemanticICONS | undefined;
}

export function AnalyticSatistic(props: IAnalyticSatisticProps) {
  const { header, statisticValue, statisticLabel, icon = "users" } = props;

  return (
    <Segment compact textAlign="center">
      <Header as="h4">
        <Icon name={icon} color="grey" />
        <Header.Content>{header}</Header.Content>
      </Header>
      <Statistic color="blue">
        <Statistic.Value>{statisticValue}</Statistic.Value>
        <Statistic.Label>{statisticLabel}</Statistic.Label>
      </Statistic>
    </Segment>
  );
}
