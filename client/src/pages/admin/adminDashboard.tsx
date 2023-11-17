import * as React from "react";
import { ProtectedRoute } from "../../components/common/protectedRoute";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

export interface IAdminDashboardProps {}

export function AdminDashboard(props: IAdminDashboardProps) {
  return (
    <AdminDashboardLayout>
      <Segment>
        <Dimmer active>
          <Loader size="massive">Work in Progress</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    </AdminDashboardLayout>
  );
}
