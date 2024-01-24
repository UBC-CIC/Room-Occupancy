import React from "react";
import { Tab, Form, Button, Header, Image, Grid } from "semantic-ui-react";
import { useAppConfig } from "../../../providers/ConfigProvider";

type Props = {
  image: string;
  organizationName: string;
};

export const SystemSettings = ({ image, organizationName }: Props) => {
  const { config } = useAppConfig();
  console.log(config);
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
          <input placeholder={config.name} />
        </Form.Field>

        <Button type="submit">Update Information</Button>
      </Form>
    </Tab.Pane>
  );
};
