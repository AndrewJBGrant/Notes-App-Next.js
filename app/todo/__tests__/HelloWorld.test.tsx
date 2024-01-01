// import HelloWorld from "../HelloWorld";
// import { render } from "@testing-library/react";

// test('renders "Hello World" text', () => {
//   const { getByText } = render(<HelloWorld />);
//   const helloWorldElement = getByText("Hello World");
//   expect(helloWorldElement).toBeInTheDocument();
// });

// test('renders "Hello World" text using getByTestId', () => {
//   const { getByTestId } = render(<HelloWorld />);
//   const helloWorldElement = getByTestId("hello-world");
//   expect(helloWorldElement).toBeInTheDocument();
//   expect(helloWorldElement.textContent).toBe("Hello World");
// });

import { render, fireEvent } from "@testing-library/react";
import Counter from "../HelloWorld";
test("increments count on button click", () => {
  const { getByText } = render(<Counter count={0} />);
  const incrementElement = getByText("Increment: 0");
  const buttonElement = getByText("Increment");
  fireEvent.click(buttonElement);
  expect(incrementElement.textContent).toBe("Increment: 1");
});
