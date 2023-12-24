import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SWRConfig } from "swr";
import { createServer } from "../configs/server";
import AuthButtons from "../components/auth/AuthButtons";

const renderComponent = async () => {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );
  await screen.findAllByRole("link");
};

describe("when user is signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => null,
    },
  ]);

  test("sign in and sign up are visible", async () => {
    await renderComponent();
    const signInBtn = screen.getByRole("link", { name: "Sign In" });
    const signUpBtn = screen.getByRole("link", { name: "Sign Up" });

    expect(signInBtn).toBeInTheDocument();
    expect(signInBtn).toHaveAttribute("href", "/signin");

    expect(signUpBtn).toBeInTheDocument();
    expect(signUpBtn).toHaveAttribute("href", "/signup");
  });

  test("sign out is not visible", async () => {
    await renderComponent();

    const signOutBtn = screen.queryByRole("link", { name: "Sign Out" });

    expect(signOutBtn).not.toBeInTheDocument();
  });
});

describe("when user is not signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => ({ user: { id: "1", email: "test@gmail.com" } }),
    },
  ]);

  test("sign in and sign up are not visible", async () => {
    await renderComponent();

    const signInBtn = screen.queryByRole("link", { name: "Sign In" });
    const signUpBtn = screen.queryByRole("link", { name: "Sign Up" });

    expect(signInBtn).not.toBeInTheDocument();
    expect(signUpBtn).not.toBeInTheDocument();
  });
  test("sign out is visible", async () => {
    await renderComponent();

    const signOutBtn = screen.queryByRole("link", { name: "Sign Out" });

    expect(signOutBtn).toBeInTheDocument();
    expect(signOutBtn).toHaveAttribute("href", "/signout");
  });
});
