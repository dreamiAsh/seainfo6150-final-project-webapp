import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsItem from "./NewsItem.jsx";
import { Link, BrowserRouter } from "react-router-dom";

it("renders the NewsItem component correctly", () => {
  const listItem = {
      title: "a",
      date: "b",
      imageId: "c",
      content: "d"
  }  
  const { container } = render(<BrowserRouter><NewsItem listItem={listItem}/></BrowserRouter>);
  expect(container).toMatchSnapshot();
});