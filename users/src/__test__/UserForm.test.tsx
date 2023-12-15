import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserForm from "@/components/UserForm";

test("shows two inputs and one button", () => {
  // arrange
  render(<UserForm onSubmit={() => {}} />);

  // act
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assert
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
