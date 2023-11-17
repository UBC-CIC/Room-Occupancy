import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import {
  MemoryRouter,
  MemoryRouterProps,
  BrowserRouter,
} from "react-router-dom";

// Implement with creation of providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Usage example:
// test("matches snapshot", () => {
//   // Replace 'Navbar' with your desired component and provide the props
//   testSnapshot(Navbar, { /* props for Navbar */ });
// });
const testComponentSnapshot = <P extends {}>(
  Component: React.ComponentType<P>,
  props: P,
  routerProps: MemoryRouterProps = {}
) => {
  const { asFragment } = render(
    <MemoryRouter {...routerProps}>
      <Component {...props} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
};

export * from "@testing-library/react";
export { customRender, testComponentSnapshot };
