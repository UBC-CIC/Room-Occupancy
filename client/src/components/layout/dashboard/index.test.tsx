import React from "react";
import { CommonLayout } from "../common";
import { DashboardLayout } from "./index";
import { customRender } from "../../../testUtils";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Dashboard Layout />", () => {
  test("should match snapshot", () => {
    const { asFragment } = customRender(
      <DashboardLayout>Colin</DashboardLayout>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should include navbar", () => {
    const { asFragment } = customRender(<CommonLayout>Colin</CommonLayout>);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("should render children", () => {
    customRender(
      <DashboardLayout>
        <div>Test Child</div>
      </DashboardLayout>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
