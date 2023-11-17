import React from "react";
import "@testing-library/jest-dom";
import { customRender } from "../../../testUtils";
import { AnalyticsSidebar } from "../AnalyticsSidebar";
import { screen } from "../../../testUtils";

describe("<AnalyticsSidebar />", () => {
  test("should matchSnapshot", () => {
    const { asFragment } = customRender(
      <AnalyticsSidebar>Colin</AnalyticsSidebar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render the correct headers", () => {
    const headers = ["ANALYTICS", "LOCATIONS"];
    const { asFragment } = customRender(
      <AnalyticsSidebar>Colin</AnalyticsSidebar>
    );

    headers.map((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
});
