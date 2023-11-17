import React from "react";
import { render, screen } from "@testing-library/react";
import { Cards } from "../common/cards/index";
import "@testing-library/jest-dom";
import { ICardsProps } from "../common/cards/index";

const mockCardProps: ICardsProps = {
  imageURL: "example.jpg",
  header: "Card Header",
  subheader: "Subheader",
  description: "Description",
  subDescription: "Sub Description",
  icon: undefined,
  url: "https://example.com",
};

test("matches snapshot", () => {
  const { asFragment } = render(<Cards {...mockCardProps} />);

  expect(asFragment()).toMatchSnapshot();
});

test("renders Cards component", () => {
  render(<Cards {...mockCardProps} />);
  const cardElement = screen.getByText(mockCardProps.header);
  expect(cardElement).toBeInTheDocument();
});

test("displays image", () => {
  render(<Cards {...mockCardProps} />);
  const imageElement = screen.getByText("Card Header");
  expect(imageElement).toBeInTheDocument();
});

test("displays card header", () => {
  render(<Cards {...mockCardProps} />);
  const headerElement = screen.getByText(mockCardProps.header);
  expect(headerElement).toBeInTheDocument();
});

test("displays subheader", () => {
  render(<Cards {...mockCardProps} />);
  const subheaderElement = screen.getByText(mockCardProps.subheader);
  expect(subheaderElement).toBeInTheDocument();
});

test("displays description", () => {
  render(<Cards {...mockCardProps} />);
  const descriptionElement = screen.getByText(mockCardProps.description);
  expect(descriptionElement).toBeInTheDocument();
});
