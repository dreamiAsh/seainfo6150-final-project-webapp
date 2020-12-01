import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Author from "./Author.jsx";

it("renders the Author component correctly", () => {
  const { container } = render(<Author />);
  expect(container).toMatchSnapshot();
});