import React from "react";
import { AdminDashboardLayout } from "../../../components/layout/admin";
import { SemanticICONS, Tab } from "semantic-ui-react";
import { UserSettings } from "./userSettings";
import { SystemSettings } from "./systemSettings";
import { useAppConfig } from "../../../providers/ConfigProvider";
import { withAuthenticator } from "@aws-amplify/ui-react";

type Props = {};

interface Pane {
  menuItem: { key: string; icon: SemanticICONS | undefined; content: string };
  render: () => React.ReactNode;
}

const AdminSettingsComponent = (props: Props) => {
  const { config } = useAppConfig();

  const panes: Pane[] = [
    {
      menuItem: { key: "user", icon: "user", content: "User" },
      render: () => <UserSettings />,
    },
    {
      menuItem: { key: "system", icon: "setting", content: "System" },
      render: () => (
        <SystemSettings image={config.image} organizationName="CG-22" />
      ),
    },
  ];

  return (
    <AdminDashboardLayout>
      <Tab panes={panes} />
    </AdminDashboardLayout>
  );
};

export const AdminSettings = withAuthenticator(AdminSettingsComponent, {
  hideSignUp: true,
});
