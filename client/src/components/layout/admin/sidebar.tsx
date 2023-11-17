import * as React from "react";
import { Divider, List, SemanticICONS, Button, Icon } from "semantic-ui-react";

import "../../../pages/analytics/Analytics.css";
import { Link } from "react-router-dom";

export interface IAdminSidebarProps {}

interface IAnalyticsItems {
  category: analyticType;
  name: string;
  icon: SemanticICONS;
}

export enum analyticType {
  analytics = "analytics",
  settings = "settings",
}

// add values for side bar here
const analyticsItems: IAnalyticsItems[] = [
  {
    category: analyticType.analytics,
    name: "Occupancy",
    icon: "chart area",
  },
  {
    category: analyticType.analytics,
    name: "Camera",
    icon: "camera",
  },
  {
    category: analyticType.settings,
    name: "Camera Zones",
    icon: "move",
  },
  {
    category: analyticType.settings,
    name: "Alerts",
    icon: "alarm",
  },
  {
    category: analyticType.settings,
    name: "Reports",
    icon: "file pdf",
  },
];

export function AdminSidebar(props: IAdminSidebarProps) {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "95%" }}>
        <Button color="blue" fluid icon labelPosition="left">
          <Icon name="dashboard" />
          Dashboard
        </Button>
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
          <Divider />
          <List.Item>
            <List.Header>SETTINGS</List.Header>
            <List.Content>
              <List>
                {analyticsItems
                  .filter((item) => item.category === analyticType.settings)
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
      </div>
      <div style={{ height: "5%" }}>
        <List>
          <List.Item>
            <List.Icon color="grey" name="setting" />
            <List.Content as="a">User Settings</List.Content>
          </List.Item>
          <List.Item as={Link} to="/">
            <List.Icon color="grey" name="log out" />
            <List.Content as="a">Log Out</List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
}
