import React from "react";
import { render } from "@testing-library/react";
import Signin from "./Signin.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the Signin component correctly", () => {
  const { container } = render(<BrowserRouter><Signin /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});