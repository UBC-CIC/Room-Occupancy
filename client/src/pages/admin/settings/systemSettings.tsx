import React from "react";
import { Tab, Form, Button, Header, Image, Grid } from "semantic-ui-react";

type Props = {
  image: string;
  organizationName: string;
};

export const SystemSettings = ({ image, organizationName }: Props) => {
  return (
    <Tab.Pane>
      <Header>System Settings</Header>
      <Form>
        <Form.Field>
          <label>Organization Picture</label>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Image src={image} size="large" />
              </Grid.Column>
              <Grid.Column width={3}>
                <Button>Change Photo</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
        <Form.Field>
          <label>Organization Name</label>
          <input placeholder={organizationName} />
        </Form.Field>

        <Button type="submit">Update Information</Button>
      </Form>
    </Tab.Pane>
  );
};
