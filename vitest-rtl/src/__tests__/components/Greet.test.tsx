import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

describe("Greet", () => {
  it("should render Hello with name when name is passed", () => {
    const name = "Vitest";
    render(<Greet name={name} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(new RegExp(`Hello ${name}`));
  });

  it("should render Login when name is not passed", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
