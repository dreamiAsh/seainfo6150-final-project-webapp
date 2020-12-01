import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Footer from "./Footer.jsx";

it("renders the footer component correctly", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});