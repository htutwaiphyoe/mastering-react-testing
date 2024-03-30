import { render, screen } from "@testing-library/react";
import SearchBox from "../../components/SearchBox";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  const onChange = vi.fn();
  render(<SearchBox onChange={onChange} />);
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText(/search/i);

  return { user, input, onChange };
};

describe("SearchBox", () => {
  it("should render an input field", () => {
    const { input } = renderComponent();
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when enter key is pressed", async () => {
    const { input, onChange, user } = renderComponent();
    const search = "Search";
    await user.type(input, search + "{enter}");
    expect(onChange).toHaveBeenCalledWith(search);
  });

  it("should not call onChange when input field is empty", async () => {
    const { input, onChange, user } = renderComponent();
    await user.type(input, "{enter}");
    expect(onChange).not.toHaveBeenCalled();
  });
});
