import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeItem from "./RecipeItem.jsx";

it("renders the RecipeItem component correctly", () => {
  const recipe = {
      title: "a",
      imageId: "b",
      author: "c",
      authorInfo: "d",
      reviews: "a",
      likes: "b",
      shortText: "c",
      ingredient: "d",
      step1: "a",
      step2: "b"
  }
  const { container } = render(<RecipeItem recipe={recipe}/>);
  expect(container).toMatchSnapshot();
});