import * as React from "react";
import {
  Button,
  Checkbox,
  Form,
  Segment,
  Header,
  Input,
  Divider,
} from "semantic-ui-react";
import "../../App.css";
import { Link } from "react-router-dom";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  return (
    <div className="container">
      <Segment compact padded="very">
        <Header color="blue" as="h1" textAlign="center">
          <Header.Content>Sign Up</Header.Content>
          <Header.Subheader color="blue">
            Let's get started, Sign Up!
          </Header.Subheader>
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
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <div className="flexContainer">
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        <Divider horizontal>Or</Divider>
        <Header as="h4" textAlign="center">
          Already have an account?
          {<Link to="/login"> Login</Link>}
        </Header>
      </Segment>
    </div>
  );
}
