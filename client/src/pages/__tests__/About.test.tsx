import * as React from "react";
import { customRender } from "../../testUtils";
import { About } from "../about/About";

describe("<About />", () => {
  it("matches snapshot", () => {
    const { asFragment } = customRender(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
