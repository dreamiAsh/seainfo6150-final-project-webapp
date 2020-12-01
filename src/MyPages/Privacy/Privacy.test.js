import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Privacy from "./Privacy.jsx";

it("renders the Privacy component correctly", () => {
  const { container } = render(<Privacy />);
  expect(container).toMatchSnapshot();
});