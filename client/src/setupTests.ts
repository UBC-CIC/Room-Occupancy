// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react/dont-cleanup-after-each";
import { configure } from "@testing-library/react";

// Throw errors if RTL encounters unhandled async operations.
configure({
  throwSuggestions: true,
});
