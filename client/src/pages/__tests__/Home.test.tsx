import * as React from "react";
import { render } from "@testing-library/react";
import { Home } from "../Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Home />", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
