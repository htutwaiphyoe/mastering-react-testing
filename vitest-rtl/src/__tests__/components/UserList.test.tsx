import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("UserList", () => {
  it("should render no user if user list is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });

  it("should render users if user list is not empty", () => {
    const users: User[] = [
      { id: 1, name: "HWP", isAdmin: true },
      { id: 2, name: "Maii", isAdmin: false },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
