import * as React from "react";
import { Header } from "semantic-ui-react";
import "../App.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CommonLayout } from "../components/layout/common";

export interface IErrorProps {}

export function Error(props: IErrorProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header size="huge" color="blue" textAlign="center">
          <Header.Content>404!</Header.Content>
          <Header.Subheader color="blue">
            Oops! This page could not be found!
          </Header.Subheader>
          <Link to="/">
            <Button circular color="blue">
              Go to Homepage
            </Button>
          </Link>
        </Header>
      </div>
    </CommonLayout>
  );
}
