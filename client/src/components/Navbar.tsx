import React from "react";
import { Menu, Segment, Grid, Button } from "semantic-ui-react";
import cicLogo from "../assets/images/cicLogo.png";
import { Link } from "react-router-dom";
import "../App.css";

export interface INavbarProps {}

interface NavBarPath {
  url: string;
  name: string;
}

export function Navbar(props: INavbarProps) {
  const navBarPaths: NavBarPath[] = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/learn",
      name: "Learn",
    },
    {
      url: "/about",
      name: "About",
    },
  ];

  return (
    <nav className="navbarContainer">
      <Segment basic attached size="mini" fluid="true">
        <Grid>
          <Grid.Column width={7}>
            <img alt="logo" width={"300rem"} src={cicLogo} />
          </Grid.Column>
          <Grid.Column textAlign="center" width={5}>
            <Menu centered="true" basic="true" secondary>
              {navBarPaths.map((navPath) => {
                return (
                  <Link key={navPath.name} to={navPath.url}>
                    <Menu.Item role="menuitem">{navPath.name}</Menu.Item>
                  </Link>
                );
              })}
            </Menu>
          </Grid.Column>
          <Grid.Column textAlign="right" width={4}>
            <Button.Group>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Button.Or text="or" />
              <Link to="/signup">
                <Button color="blue">SignUp</Button>
              </Link>
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    </nav>
  );
}
