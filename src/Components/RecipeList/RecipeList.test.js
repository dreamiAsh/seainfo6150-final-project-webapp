import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeList from "./RecipeList.jsx";

it("renders the RecipeList component correctly", () => {
  const { container } = render(<RecipeList />);
  expect(container).toMatchSnapshot();
});