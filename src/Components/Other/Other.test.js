import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Other from "./Other.jsx";

it("renders the Other component correctly", () => {
  const { container } = render(<Other />);
  expect(container).toMatchSnapshot();
});