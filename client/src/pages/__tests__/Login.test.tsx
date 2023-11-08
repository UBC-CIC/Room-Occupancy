import * as React from "react";
import { render } from "@testing-library/react";
import { Login } from "../auth/Login";

describe("<Login />", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Login />);

    expect(asFragment()).toMatchSnapshot();
  });
});
