import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "@/App";

test("renders form and table", () => {
  const { container } = render(<App />);

  const form = container.querySelector("form");
  const table = screen.getByRole("table");

  expect(form).toBeInTheDocument();
  expect(table).toBeInTheDocument();
});
