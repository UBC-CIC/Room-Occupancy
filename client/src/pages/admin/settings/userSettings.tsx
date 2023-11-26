import React from "react";
import { Tab, Form, Button, Header, Image, Grid } from "semantic-ui-react";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
};

export const UserSettings = ({ firstName, lastName, email }: Props) => {
  return (
    <Tab.Pane>
      <Header>General</Header>
      <Form>
        <Form.Field>
          <label>Profile Picture</label>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  size="tiny"
                  circular
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <Button>Change Photo</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input placeholder={firstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder={lastName} />
        </Form.Field>
        <Form.Field>
          <label>Email: {email}</label>
        </Form.Field>
        <Button type="submit">Update Information</Button>
        <Button>Change Password</Button>
      </Form>
    </Tab.Pane>
  );
};
