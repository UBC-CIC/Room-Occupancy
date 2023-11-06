import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Error } from "../Error";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { testComponentSnapshot } from "../../testUtils";

test("renders 404 header", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
  });
  const headerElement = screen.getByText("404!");
  expect(headerElement).toBeInTheDocument();
});

test("should match snapshopt", () => {
  testComponentSnapshot(Error, {});
});

test("renders error message", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
  });
  const errorMessageElement = screen.getByText(
    "Oops! This page could not be found!"
  );
  expect(errorMessageElement).toBeInTheDocument();
});

test("renders 'Go to Homepage' button", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
  });
  const buttonElement = screen.getByText("Go to Homepage");
  expect(buttonElement).toBeInTheDocument();
});

test("navigates to homepage on button click", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/colins-route"]}>
      <Error />
    </MemoryRouter>
  );
  const buttonElement = screen.getByText("Go to Homepage");
  expect(buttonElement).toBeInTheDocument();

  act(() => {
    buttonElement.click();
  });

  const currentLocation = container.querySelector("a")?.getAttribute("href");

  expect(currentLocation).toBe("/");
});
