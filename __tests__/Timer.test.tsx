import { render, screen } from "@testing-library/react";
import Timer from "@/app/timer/Timer";

// First test

describe('Timer', () => {
it("Should find the focus start button", () => {
   // AAA Triple A test pattern
   //Number 1 Arrange!
  render(<Timer />)
// Number 2 Act!
const myElem = screen.getByText(/focus/i)
// Number 3 Assertion!
expect(myElem).toBeInTheDocument()
});

it("Should get the buttons", () => {
   // AAA Triple A test pattern
   //Number 1 Arrange!
  render(<Timer />)
// Number 2 Act!
const myElem = screen.getByRole('button', {
  name: 'Short Break'
})
// Number 3 Assertion!
expect(myElem).toBeInTheDocument()
});
});
