import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Footer from "./Footer.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the footer component correctly", () => {
  const { container } = render(<BrowserRouter><Footer /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});