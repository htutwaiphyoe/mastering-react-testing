import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "../components/repositories/RepositoriesListItem";

const renderComponent = () => {
  const repository = {
    full_name: "facebook/react",
    language: "Typescript",
    description: "A library for building user interface",
    owner: { login: "facebook" },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return {
    repository,
  };
};

test("shows github repo link", async () => {
  const { repository } = renderComponent();
  await screen.findByRole("img", { name: repository.language });

  const link = screen.getByRole("link", { name: "github" });
  expect(link).toHaveAttribute("href", repository.html_url);
});

test("shows correct language icon", async () => {
  const { repository } = renderComponent();
  const icon = await screen.findByRole("img", { name: repository.language });
  expect(icon).toHaveClass("ts-icon");
});

test("shows correct editor link", async () => {
  const { repository } = renderComponent();
  await screen.findByRole("img", { name: repository.language });

  const link = screen.getByRole("link", {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`);
});
