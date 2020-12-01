import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signin from "./Signin.jsx";

it("renders the Signin component correctly", () => {
  const { container } = render(<Signin />);
  expect(container).toMatchSnapshot();
});