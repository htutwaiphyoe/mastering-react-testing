import { render, screen } from "@testing-library/react";
import ExpandableText from "../../components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 45);
  const truncatedText = longText.substring(0, limit) + "...";

  it("should render full text if text is short", () => {
    const shortText = "HWP";
    render(<ExpandableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });

  it("should render truncated text if text is long", () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button");

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("should render full text if show more button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);

    await user.click(button);
    expect(button).toHaveTextContent(/less/i);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it("should render truncated text if show less button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const showMoreBtn = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreBtn);

    const showLessBtn = screen.getByRole("button", { name: /less/i });
    await user.click(showLessBtn);
    expect(showMoreBtn).toHaveTextContent(/more/i);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
