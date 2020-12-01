import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipePage from "./RecipePage.jsx";

it("renders the RecipePage component correctly", () => {
  const { container } = render(<RecipePage />);
  expect(container).toMatchSnapshot();
});