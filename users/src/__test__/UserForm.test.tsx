import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import UserForm from "@/components/UserForm";
import user from "@testing-library/user-event";

test("shows two inputs and one button", () => {
  render(<UserForm onSubmit={() => {}} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("calls onSubmit when form is submitted", async () => {
  const data = { name: "Maii", email: "maii@gmail.com" };

  const onSubmit = jest.fn();
  render(<UserForm onSubmit={onSubmit} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  await user.type(nameInput, data.name);

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  await user.type(emailInput, data.email);

  const button = screen.getByRole("button");
  await waitFor(() => fireEvent.submit(button));

  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith(data);
});
