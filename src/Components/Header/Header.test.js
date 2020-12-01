import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header.jsx";

it("renders the Header component correctly", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});