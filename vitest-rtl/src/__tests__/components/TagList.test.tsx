import { render, screen } from "@testing-library/react";
import TagList from "../../components/TagList";

describe("TagList", () => {
  it("should render tag list after api call", async () => {
    render(<TagList />);
    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBeGreaterThan(0);
  });
});
