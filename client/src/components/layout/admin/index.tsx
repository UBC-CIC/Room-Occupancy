import React from "react";
import { AdminNavbar } from "./navbar";
import { AdminSidebar } from "./sidebar";
import { Grid } from "semantic-ui-react";

type Props = {
  children: React.ReactNode;
};

export const AdminDashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <AdminNavbar user="John Doe" image={undefined} />
      <Grid className="dashboardContainer">
        <Grid.Column className="sidebarContainer" width={2}>
          <AdminSidebar />
        </Grid.Column>
        <Grid.Column width={14}>{children}</Grid.Column>
      </Grid>
    </div>
  );
};
