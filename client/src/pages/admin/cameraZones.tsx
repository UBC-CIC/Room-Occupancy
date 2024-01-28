import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Header, HeaderSubheader } from "semantic-ui-react";

type Props = {};

const cameraZonesComponent = (props: Props) => {
  return (
    <AdminDashboardLayout>
      <Header as="h2">
        Camera Zones
        <HeaderSubheader>
          View and update camera zone information
        </HeaderSubheader>
      </Header>
      <br />
      Camera Zones... TBD Cassy
    </AdminDashboardLayout>
  );
};

export const CameraZones = withAuthenticator(cameraZonesComponent, {
  hideSignUp: true,
});
