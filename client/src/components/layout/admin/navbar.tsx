import React from "react";
import { Label, Segment, Grid, Icon, Header, Image } from "semantic-ui-react";
import cicLogo from "../../../assets/images/cicLogo.png";
import "../../../App.css";

interface Props {
  user: string;
  image: string | undefined;
}

export function AdminNavbar({ user, image }: Props) {
  return (
    <nav className="navbarContainer">
      <Segment basic attached size="mini" fluid="true">
        <Grid stackable={false} columns={3}>
          <Grid.Column width={4}>
            <img alt="logo" width={"300rem"} src={cicLogo} />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={7}>
            <Header as="h3">Administator Console</Header>
          </Grid.Column>
          <Grid.Column textAlign="right" verticalAlign="middle" width={5}>
            <Icon link size="large" name="question circle outline" />
            <Icon link size="large" name="setting" />
            <Icon link size="large" name="alarm" />
            {image == undefined ? (
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
