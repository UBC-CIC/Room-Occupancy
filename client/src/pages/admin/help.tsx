import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { Header, Segment } from "semantic-ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

type Props = {};

const AdminHelp = (props: Props) => {
  return (
    <AdminDashboardLayout>
      <Segment>
        <Header size="small">
          Refer to documentation on:
          <a
            href="https://github.com/UBC-CIC/people-counting-with-aws-rekognition-RaspberryPi-IOT"
            target="blank"
          >
            GitHub
          </a>
        </Header>
      </Segment>
    </AdminDashboardLayout>
  );
};

export default withAuthenticator(AdminHelp, { hideSignUp: true });
