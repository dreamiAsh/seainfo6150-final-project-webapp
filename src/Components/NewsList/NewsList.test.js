import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsList from "./NewsList.jsx";

it("renders the footer component correctly", () => {
  const { container } = render(<NewsList />);
  expect(container).toMatchSnapshot();
});