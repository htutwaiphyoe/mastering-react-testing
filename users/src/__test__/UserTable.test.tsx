import UserTable from "@/components/UserTable";
import { render, screen } from "@testing-library/react";

test("shows one row per user", () => {
  const users = [
    { name: "Maii", email: "mail@gmail.com" },
    { name: "Hwp", email: "hwp@gmail.com" },
  ];
  render(<UserTable list={users} />);

  const rows = screen.getAllByRole("row");

  expect(rows).toHaveLength(3);
});
