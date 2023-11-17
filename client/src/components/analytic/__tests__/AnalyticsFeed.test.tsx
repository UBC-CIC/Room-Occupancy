import React from "react";
import "@testing-library/jest-dom";
import { customRender } from "../../../testUtils";
import { AnalyticsFeed } from "../AnalyticsFeed";

describe("<AnalyticsFeed />", () => {
  const mockProps = {
    summaryHeader: "Test Header",
    summarySubheader: "Test Subheader",
    summaryDate: "2023-01-01",
    icon: undefined,
    metaHeader: "Test Meta",
  };

  test("should matchSnapshot", () => {
    const { asFragment } = customRender(
      <AnalyticsFeed {...mockProps}>Colin</AnalyticsFeed>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render props", () => {
    const { getByText } = customRender(
      <AnalyticsFeed {...mockProps}>Colin</AnalyticsFeed>
    );

    expect(getByText(mockProps.summaryHeader)).toBeInTheDocument();
    expect(getByText(mockProps.summarySubheader)).toBeInTheDocument();
    expect(getByText(mockProps.summaryDate)).toBeInTheDocument();
    expect(getByText(mockProps.metaHeader)).toBeInTheDocument();
  });
});
