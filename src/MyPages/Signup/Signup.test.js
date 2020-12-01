import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup from "./Signup.jsx";

it("renders the Signup component correctly", () => {
  const { container } = render(<Signup />);
  expect(container).toMatchSnapshot();
});