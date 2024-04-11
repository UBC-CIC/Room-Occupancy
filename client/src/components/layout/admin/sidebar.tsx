import * as React from "react";
import { Divider, List, SemanticICONS, Button, Icon } from "semantic-ui-react";

import "../../../pages/analytics/Analytics.css";
import { Link } from "react-router-dom";
import { handleSignOut } from "../../../pages/auth/Helpers";

export interface IAdminSidebarProps {}

interface IAnalyticsItems {
  category: analyticType;
  name: string;
  icon: SemanticICONS;
  link: string;
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
    icon: "info circle",
    link: "/analytics",
  },
  {
    category: analyticType.analytics,
    name: "Camera",
    icon: "camera",
    link: "/admin_camera",
  },
  {
    category: analyticType.analytics,
    name: "Trends",
    icon: "chart area",
    link: "/trends",
  },
  {
    category: analyticType.settings,
    name: "Camera Zones",
    icon: "move",
    link: "/admin_camera_zones",
  },
  {
    category: analyticType.settings,
    name: "Alerts",
    icon: "alarm",
    link: "/admin_camera_alerts",
  },
  {
    category: analyticType.analytics,
    name: "Costs and Usage",
    icon: "dollar sign",
    link: "/admin_costs_and_usage",
  },
];

export function AdminSidebar(props: IAdminSidebarProps) {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "94%" }}>
        <Link to="/admin_dashboard">
          <Button color="blue" fluid icon labelPosition="left">
            <Icon name="dashboard" />
            Dashboard
          </Button>
        </Link>
        <List>
          <List.Item>
            <List.Header>ANALYTICS</List.Header>
            <List.Content>
              <List>
                {analyticsItems
                  .filter((item) => item.category === analyticType.analytics)
                  .map((value, key) => {
                    return (
                      <Link to={value.link}>
                        <List.Item key={key}>
                          <List.Icon color="grey" name={value.icon} />
                          <List.Content as="a">{value.name}</List.Content>
                        </List.Item>
                      </Link>
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
                      <Link to={value.link}>
                        <List.Item key={key}>
                          <List.Icon color="grey" name={value.icon} />
                          <List.Content as="a">{value.name}</List.Content>
                        </List.Item>
                      </Link>
                    );
                  })}
              </List>
            </List.Content>
          </List.Item>
        </List>
      </div>
      <div style={{ height: "6%" }}>
        <List>
          <Link to="/">
            <List.Item>
              <List.Icon color="grey" name="home" />
              <List.Content as="a">Home</List.Content>
            </List.Item>
          </Link>
          <Link to="/admin_settings">
            <List.Item>
              <List.Icon color="grey" name="setting" />
              <List.Content as="a">User Settings</List.Content>
            </List.Item>
          </Link>
          <List.Item as={Link} to="/" onClick={handleSignOut}>
            <List.Icon color="grey" name="log out" />
            <List.Content as="a">Log Out</List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
}
