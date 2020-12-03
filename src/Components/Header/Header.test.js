import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the Header component correctly", () => {
  const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});