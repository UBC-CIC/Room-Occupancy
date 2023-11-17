import * as React from "react";
import { ProtectedRoute } from "../../components/common/protectedRoute";
import { Button, Icon } from "semantic-ui-react";

export interface IAdminDashboardProps {}

export function AdminDashboard(props: IAdminDashboardProps) {
  return (
    <div>
      <Button icon labelPosition="left">
        <Icon name="user" />
        Cassiel
      </Button>
    </div>
  );
}
