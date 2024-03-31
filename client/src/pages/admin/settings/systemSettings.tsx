import React from "react";
import {
  Tab,
  Form,
  Button,
  Header,
  Image,
  Grid,
  HeaderSubheader,
} from "semantic-ui-react";
import { useAppConfig } from "../../../providers/ConfigProvider";

type Props = {
  image: string;
  organizationName: string;
};

export const SystemSettings = ({ image, organizationName }: Props) => {
  const { config } = useAppConfig();
  return (
    <Tab.Pane>
      <Header color="blue" as="h3">
        System Settings
        <HeaderSubheader>
          View and update system settings and configurations
        </HeaderSubheader>
      </Header>
      <Form>
        <Form.Field>
          <label>Organization Picture</label>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
                <Image src={image} size="large" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
        <Form.Field>
          <label>Organization Name: {config?.name}</label>
        </Form.Field>
      </Form>
    </Tab.Pane>
  );
};
