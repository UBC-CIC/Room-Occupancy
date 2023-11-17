import React from "react";
import { CommonLayout } from "./index";
import { customRender } from "../../../testUtils";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<CommonLayout />", () => {
  test("should matchSnapshot", () => {
    const { asFragment } = customRender(<CommonLayout>Colin</CommonLayout>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should include the navbar", () => {
    const { asFragment } = customRender(<CommonLayout>Colin</CommonLayout>);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("should render children", () => {
    customRender(
      <CommonLayout>
        <div>Test Child</div>
      </CommonLayout>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  test("should have the correct component structure", () => {
    const { container } = customRender(
      <CommonLayout>
        <div>Test Child</div>
      </CommonLayout>
    );
    const firstChild = container.firstChild;
    expect(firstChild).toHaveClass("navbarContainer");
  });
});
