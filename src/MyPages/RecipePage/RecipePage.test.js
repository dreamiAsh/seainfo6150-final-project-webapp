import React from "react";
import { render } from "@testing-library/react";
import RecipePage from "./RecipePage.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the RecipePage component correctly", () => {
  const { container } = render(<BrowserRouter><RecipePage /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});