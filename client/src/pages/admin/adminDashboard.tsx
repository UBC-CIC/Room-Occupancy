import React, { useState, useEffect } from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Segment, Dimmer, Loader, Image, Header } from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { handleFetchUserAttributes } from "../auth/Helpers";
import { FetchUserAttributesOutput } from "aws-amplify/auth";

export interface IAdminDashboardProps {}

function AdminDashboardComponent(props: IAdminDashboardProps) {
  const [user, setUser] = useState<FetchUserAttributesOutput | undefined>(
    undefined
  );
  useEffect(() => {
    handleFetchUserAttributes()
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error("Error fetching user attributes:", error);
      });
  }, [user]);

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
