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
import { useAppConfig } from "../../providers/ConfigProvider";

type Props = {
  camera: any;
};

export const CameraZoneSettings = ({ camera }: Props) => {
  const { config } = useAppConfig();
  console.log(config);
  return (
    <Tab.Pane>
      <Form>
        {/* <Form.Field>
          <label>Organization Picture</label>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={2}>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button>Change Photo</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field> */}
      </Form>
    </Tab.Pane>
  );
};
