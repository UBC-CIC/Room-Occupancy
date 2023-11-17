import * as React from "react";
import { customRender } from "../../testUtils";
import { Login } from "../auth/Login";

describe("<Login />", () => {
  it("matches snapshot", () => {
    const { asFragment } = customRender(<Login />);

    expect(asFragment()).toMatchSnapshot();
  });
});
