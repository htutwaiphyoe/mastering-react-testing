import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  render(<TermsAndConditions />);
  return {
    checkBox: screen.getByRole("checkbox"),
    button: screen.getByRole("button"),
  };
};

describe("TermsAndConditions", () => {
  it("should render initial state", () => {
    const { checkBox, button } = renderComponent();
    expect(checkBox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable button after checkbox is checked", async () => {
    const { checkBox, button } = renderComponent();

    const user = userEvent.setup();
    await user.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeEnabled();
  });
});
