import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import NewJournalForm from "../journal/CreateJournal";

describe("New Journal form", () => {


it("Should render New Journal Form", () => {
render(<NewJournalForm />);

const myForm = screen.getByRole("form", { name: "NewJournalForm"} )

expect(myForm).toBeInTheDocument();








  // expect(screen.getByRole("input", { name: /title/i })).toBeInTheDocument();
  // expect(
  //   screen.getByRole("textarea", { name: /content/i })
  // ).toBeInTheDocument();

  // expect(
  //   screen.getByRole("button", { name: /Create Journal/i })
  // ).toBeInTheDocument();
  // expect(screen.getByRole("button", { name: /Create Journal/i })).toBeInTheDocument();


});
});
