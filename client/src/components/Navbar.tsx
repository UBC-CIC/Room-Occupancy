import { Menu, Segment, Grid, Button } from "semantic-ui-react";
import cicLogo from "../assets/images/cicLogo.png";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const items = [
    { key: "home", name: "Home" },
    { key: "learn", name: "Learn" },
    { key: "about", name: "About Us" },
  ];

  return (
    <Segment basic attached size="mini" fluid>
      <Grid>
        <Grid.Column width={7}>
          <img width={"300rem"} src={cicLogo} />
        </Grid.Column>
        <Grid.Column textAlign="center" width={5}>
          <Menu centered basic items={items} secondary></Menu>
        </Grid.Column>
        <Grid.Column textAlign="right" width={4}>
          <Button.Group>
            <Button>Login</Button>
            <Button.Or text="or" />
            <Button color="blue">SignUp</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
