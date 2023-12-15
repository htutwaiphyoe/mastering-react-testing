import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserForm from "@/components/UserForm";

test("shows two inputs and one button", () => {
  render(<UserForm onSubmit={() => {}} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
