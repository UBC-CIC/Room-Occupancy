import React from "react";
import {
  Label,
  Segment,
  Grid,
  Icon,
  Header,
  Image,
  Dropdown,
  DropdownMenu,
} from "semantic-ui-react";
import "../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppConfig } from "../../../providers/ConfigProvider";
import { handleSignOut } from "../../../pages/auth/Helpers";

interface Props {
  user: string;
  image: string | undefined;
}

export function AdminNavbar({ user, image }: Props) {
  const { config } = useAppConfig();
  const navigate = useNavigate();

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
            <Link to="/">
              <Icon link size="large" name="home" />
            </Link>
            <Link to="/admin_settings">
              <Icon link size="large" name="setting" />
            </Link>
            <Link to="/admin_help">
              <Icon link size="large" name="question circle outline" />
            </Link>
            {image === undefined ? (
              <Dropdown
                closeOnEscape
                text={user}
                className="icon"
                labeled
                button
                icon="user"
              >
                <DropdownMenu>
                  <Dropdown.Item
                    onClick={() => navigate("/")}
                    text="Home Page"
                  />

                  <Dropdown.Item
                    onClick={() => handleSignOut()}
                    text="Log Out"
                  />
                </DropdownMenu>
              </Dropdown>
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
