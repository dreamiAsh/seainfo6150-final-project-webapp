import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchPage from "./SearchPage.jsx";

it("renders the SearchPage component correctly", () => {
  const { container } = render(<SearchPage />);
  expect(container).toMatchSnapshot();
});