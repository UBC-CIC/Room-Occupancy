import * as React from "react";
import { Button, Form, Segment, Header, Input } from "semantic-ui-react";
import "../../App.css";
import { Link } from "react-router-dom";

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  return (
    <div className="container">
      <Segment compact padded="very">
        <Header color="blue" as="h1" textAlign="center">
          <Header.Content>Welcome</Header.Content>
          <Header.Subheader color="blue">Login with Email</Header.Subheader>
        </Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <Input icon="user" iconPosition="left" placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input
              type="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
            />
          </Form.Field>
          <div className="flexContainer">
            <Button color="blue" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Segment>
    </div>
  );
}
