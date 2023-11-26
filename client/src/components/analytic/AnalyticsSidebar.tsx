import * as React from "react";
import { List, SemanticICONS } from "semantic-ui-react";

import "../../pages/analytics/Analytics.css";

export interface IAnalyticsSidebarProps {}

interface IAnalyticsItems {
  category: analyticType;
  name: string;
  icon: SemanticICONS;
}

export enum analyticType {
  analytics = "analytics",
  locations = "location",
}

// add values for side bar here
const analyticsItems: IAnalyticsItems[] = [
  {
    category: analyticType.analytics,
    name: "Analytics",
    icon: "chart area",
  },
  {
    category: analyticType.analytics,
    name: "Camera",
    icon: "camera",
  },
  {
    category: analyticType.locations,
    name: "Zone 1",
    icon: "location arrow",
  },
  {
    category: analyticType.locations,
    name: "Zone 2",
    icon: "location arrow",
  },
];

export function AnalyticsSidebar(props: IAnalyticsSidebarProps) {
  return (
    <List>
      <List.Item>
        <List.Header>ANALYTICS</List.Header>
        <List.Content>
          <List>
            {analyticsItems
              .filter((item) => item.category === analyticType.analytics)
              .map((value, key) => {
                return (
                  <List.Item key={key}>
                    <List.Icon color="grey" name={value.icon} />
                    <List.Content as="a">{value.name}</List.Content>
                  </List.Item>
                );
              })}
          </List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Header>LOCATIONS</List.Header>
        <List.Content>
          <List>
            {analyticsItems
              .filter((item) => item.category === analyticType.locations)
              .map((value, key) => {
                return (
                  <List.Item key={key}>
                    <List.Icon color="grey" name={value.icon} />
                    <List.Content as="a">{value.name}</List.Content>
                  </List.Item>
                );
              })}
          </List>
        </List.Content>
      </List.Item>
    </List>
  );
}