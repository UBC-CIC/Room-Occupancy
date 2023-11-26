import React from "react";
import { AdminDashboardLayout } from "../../../components/layout/admin";
import { SemanticICONS, Tab } from "semantic-ui-react";
import { UserSettings } from "./userSettings";
import { SystemSettings } from "./systemSettings";
import { AwsSettings } from "./awsSettings";
import cicLogo from "../../../assets/images/cicLogo.png";

type Props = {};

interface Pane {
  menuItem: { key: string; icon: SemanticICONS | undefined; content: string };
  render: () => React.ReactNode;
}

export const AdminSettings = (props: Props) => {
  const panes: Pane[] = [
    {
      menuItem: { key: "user", icon: "user", content: "User" },
      render: () => (
        <UserSettings firstName="John" lastName="Doe" email="john@email.com" />
      ),
    },
    {
      menuItem: { key: "system", icon: "setting", content: "System" },
      render: () => <SystemSettings image={cicLogo} organizationName="CG-22" />,
    },
    {
      menuItem: { key: "system", icon: "aws", content: "AWS" },
      render: () => <AwsSettings />,
    },
  ];

  return (
    <AdminDashboardLayout>
      <Tab panes={panes} />
    </AdminDashboardLayout>
  );
};
