import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "../components/repositories/RepositoriesListItem";

jest.mock("../components/tree/FileIcon.js", () => {
  return () => "File Icon";
});

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
  renderComponent();
});
