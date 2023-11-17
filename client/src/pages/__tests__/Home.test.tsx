import * as React from "react";
import { customRender } from "../../testUtils";
import { Home } from "../Home";
import { Router } from "react-router-dom";

describe("<Home />", () => {
  it("matches snapshot", () => {
    const { asFragment } = customRender(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
