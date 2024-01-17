import React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";
import { CommonLayout } from "../../components/layout/common";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsmobile from "../../aws-exports";
import { AdminDashboard } from "../admin/adminDashboard";

Amplify.configure(awsmobile);

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  if (route === "authenticated") return <AdminDashboard />;

  return (
    <CommonLayout>
      <div className="container">
        <Header color="blue" as="h1" textAlign="center">
          <Header.Content>Welcome</Header.Content>
          <Header.Subheader color="blue">Login with Username</Header.Subheader>
        </Header>
        <Authenticator hideSignUp={true} />
      </div>
    </CommonLayout>
  );
}
