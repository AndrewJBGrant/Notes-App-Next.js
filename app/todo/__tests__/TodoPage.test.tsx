import { render, screen } from "@testing-library/react";

import NewTodoForm from "../NewTodo";

describe("Todo Form", () => {

it("Should show a  button", () => {


render(<NewTodoForm />)

const todoElm = screen.getByRole("button", {
  name: "ADD"
})
expect(todoElm).toBeInTheDocument()
});



});
