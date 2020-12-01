import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Nav from "./Nav.jsx";

it("renders the Nav component correctly", () => {
  const { container } = render(<Nav />);
  expect(container).toMatchSnapshot();
});