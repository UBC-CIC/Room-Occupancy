import * as React from "react";
import { render, act, screen } from "@testing-library/react";
import { customRender } from "../../testUtils";
import { Learn } from "../Learn";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Learn />", () => {
  it("matches snapshot", () => {
    const { asFragment } = customRender(<Learn />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders learn paragraph", () => {
    act(() => {
      customRender(<Learn />);
    });
    const learnParagraph = screen.getByText(
      "The UBC Cloud Innovation Center seeks a cutting-edge solution to address the challenge of real-time people counting and occupancy monitoring in spaces, such as rooms or traffic areas. This solution should utilize IoT devices, an open-source image processor, and cloud services to accurately count and track the number of people in these areas. The data gathered should be presented via a user-friendly interface that efficiently conveys information."
    );
    expect(learnParagraph).toBeInTheDocument();
  });
});
