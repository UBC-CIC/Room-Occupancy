import React from "react";
import { Label, Segment, Grid, Icon, Header, Image } from "semantic-ui-react";
import cicLogo from "../../../assets/images/cicLogo.png";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useAppConfig } from "../../../providers/ConfigProvider";

interface Props {
  user: string;
  image: string | undefined;
}

export function AdminNavbar({ user, image }: Props) {
  const { config } = useAppConfig();
  return (
    <nav className="navbarContainer">
      <Segment basic attached size="mini" fluid="true">
        <Grid stackable={false} columns={3}>
          <Grid.Column width={4}>
            <img alt="logo" width={"300rem"} src={config.image} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={7}>
            <Header as="h3">Administator Console</Header>
          </Grid.Column>
          <Grid.Column textAlign="right" verticalAlign="middle" width={5}>
            <Link to="/admin_help">
              <Icon link size="large" name="question circle outline" />
            </Link>
            <Link to="/admin_settings">
              <Icon link size="large" name="setting" />
            </Link>
            <Icon link size="large" name="alarm" />
            {image === undefined ? (
              <Label
                size="large"
                as="a"
                basic
                icon="user"
                content={user}
                color="blue"
              />
            ) : (
              <Label size="large" as="a" basic image>
                <Image size="large" src={image} />
                {user}
              </Label>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </nav>
  );
}
