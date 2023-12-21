import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "../components/repositories/RepositoriesListItem";

const renderComponent = () => {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "A library for building user interface",
    owner: "facebook",
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
});
