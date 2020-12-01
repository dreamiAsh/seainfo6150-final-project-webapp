import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TermService from "./TermService.jsx";

it("renders the TermService component correctly", () => {
  const { container } = render(<TermService />);
  expect(container).toMatchSnapshot();
});