import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterPage from "./FilterPage.jsx";

it("renders the FilterPage component correctly", () => {
  const { container } = render(<FilterPage />);
  expect(container).toMatchSnapshot();
});