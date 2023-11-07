import * as React from "react";
import { render } from "@testing-library/react";
import { About } from "../about/About";

describe("<About />", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
