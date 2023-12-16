import "@testing-library/jest-dom";
import UserTable from "@/components/UserTable";
import { render, screen, within } from "@testing-library/react";

function renderUserTable() {
  const users = [
    { name: "Maii", email: "mail@gmail.com" },
    { name: "Hwp", email: "hwp@gmail.com" },
  ];
  render(<UserTable list={users} />);

  return { users };
}

test("shows one row per user", () => {
  renderUserTable();

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("renders name and email of the user", () => {
  const { users } = renderUserTable();

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
