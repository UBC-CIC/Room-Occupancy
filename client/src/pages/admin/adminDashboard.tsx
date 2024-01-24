import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Segment, Dimmer, Loader, Image, Header } from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useGetUserAttributes } from "../../shared/hooks/useGetUserAttributes";

export interface IAdminDashboardProps {}

function AdminDashboardComponent(props: IAdminDashboardProps) {
  const { user } = useGetUserAttributes();

  return (
    <AdminDashboardLayout>
      <Header>Welcome {user?.name}!</Header>
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
