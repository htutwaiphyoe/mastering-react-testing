import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "../components/repositories/RepositoriesSummary";

test("Shows repository information", () => {
  const repository = {
    stargazers_count: 1000,
    open_issues: 40,
    forks: 90,
    language: "Go",
  };

  render(<RepositoriesSummary repository={repository} />);

  Object.values(repository).forEach((value) => {
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  });
});
