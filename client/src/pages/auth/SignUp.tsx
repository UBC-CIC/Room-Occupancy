import * as React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>SignUp</Header.Content>
      </Header>
    </div>
  );
}
