import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";

describe("User Account", () => {
  it("should show user name", () => {
    const user: User = { id: 1, name: "HWP", isAdmin: false };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should show edit button if user is an admin", () => {
    const user: User = { id: 1, name: "HWP", isAdmin: true };
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not show edit button if user is not an admin", () => {
    const user: User = { id: 1, name: "HWP", isAdmin: false };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
