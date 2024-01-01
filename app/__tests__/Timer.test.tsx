import { render, screen } from "@testing-library/react";
import Timer from "@/app/timer/Timer";
import userEvent from "@testing-library/user-event";
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


it("Should show the short time button", () => {
//Number 1 Arrange!
   render(<Timer />)
// Number 2 Act!
const myElem = screen.getByText(/short/i)
// Number 3 Assertion!
expect(myElem).toBeInTheDocument()
});



it("Should get the buttons", () => {
   // AAA Triple A test pattern
   //Number 1 Arrangeear
  render(<Timer />)
// Number 2 Act!
const myElem = screen.getByRole('button', {
  name: 'Long Break'
})
// Number 3 Assertion!
expect(myElem).toBeInTheDocument()
});


})
