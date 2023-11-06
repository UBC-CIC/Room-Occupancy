import { Menu, Segment, Grid, Button } from "semantic-ui-react";
import cicLogo from "../assets/images/cicLogo.png";
import { Link } from "react-router-dom";

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
    <Segment basic attached size="mini" fluid>
      <Grid>
        <Grid.Column width={7}>
          <img width={"300rem"} src={cicLogo} />
        </Grid.Column>
        <Grid.Column textAlign="center" width={5}>
          <Menu centered basic secondary>
            {navBarPaths.map((navPath) => {
              return (
                <Link to={navPath.url}>
                  <Menu.Item>{navPath.name}</Menu.Item>
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
  );
}
