import * as React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

export interface IAdminDashboardProps {}

function AdminDashboardComponent(props: IAdminDashboardProps) {
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

export const AdminDashboard = withAuthenticator(AdminDashboardComponent, {
  hideSignUp: true,
});
