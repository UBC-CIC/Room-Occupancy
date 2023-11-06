import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

// Implement with creation of providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return { children };
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { ...options });

export * from "@testing-library/react";
export { customRender as render };
