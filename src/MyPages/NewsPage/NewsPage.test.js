import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsPage from "./NewsPage.jsx";

it("renders the NewsPage component correctly", () => {
  const { container } = render(<NewsPage />);
  expect(container).toMatchSnapshot();
});