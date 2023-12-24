import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import { createServer } from "../configs/server";

createServer([
  {
    path: "/api/repositories",
    method: "get",
    res: (req) => {
      const query = req.url.searchParams.get("q");
      const language = query.split("language:")[1];
      return { items: [{ id: language, full_name: language }] };
    },
  },
]);

test("shows links of the popular languages", async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );
  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ];
  for (let language of languages) {
    const links = await screen.findAllByRole("link", { name: language });
    expect(links).toHaveLength(1);
  }
});
