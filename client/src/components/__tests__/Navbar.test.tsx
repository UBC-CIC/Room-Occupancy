import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "../common/navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  const renderNavbar = () => {
    return render(
      <Router>
        <Navbar />
      </Router>
    );
  };

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the navbar", () => {
    renderNavbar();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    const navPathNames = ["Home", "Learn", "About"];
    renderNavbar();
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(4);

    navPathNames.map((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("has correct navigation paths", () => {
    renderNavbar();
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Learn").closest("a")).toHaveAttribute(
      "href",
      "/learn"
    );
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
    expect(screen.getByText("Analytics").closest("a")).toHaveAttribute(
      "href",
      "/analytics"
    );
  });

  it("renders login and signup buttons", () => {
    renderNavbar();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("SignUp")).toBeInTheDocument();
  });
});
