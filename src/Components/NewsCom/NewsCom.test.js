import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsCom from "./NewsCom.jsx";

it("renders the NewsCom component correctly", () => {
  const { container } = render(<NewsCom />);
  expect(container).toMatchSnapshot();
});