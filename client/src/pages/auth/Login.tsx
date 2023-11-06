import * as React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  return (
    <div className="container">
      <Header as="h1" textAlign="center">
        <Header.Content>Login</Header.Content>
      </Header>
    </div>
  );
}
