import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Theme } from "@radix-ui/themes";
import OrderStatusSelector from "../../components/OrderStatusSelector";

describe("OrderStatusSelector", () => {
  const renderComponent = () => {
    const onChange = vi.fn();

    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    );

    return {
      onChange,
      user: userEvent.setup(),
      trigger: screen.getByRole("combobox"),
      getOptions: () => screen.findAllByRole("option"),
      getOption: (label: RegExp) =>
        screen.findByRole("option", { name: label }),
    };
  };

  it("should render New as default", () => {
    const { trigger } = renderComponent();
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent(/new/i);
  });

  it("should render correct status", async () => {
    const { trigger, user, getOptions } = renderComponent();
    await user.click(trigger);

    const options = await getOptions();
    expect(options).toHaveLength(3);

    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });

  it.each([
    { label: /processed/i, value: "processed" },
    { label: /fulfilled/i, value: "fulfilled" },
  ])(
    "should call onChange with $value when $label is selected",
    async ({ label, value }) => {
      const { trigger, user, onChange, getOption } = renderComponent();

      await user.click(trigger);
      const option = await getOption(label);
      await user.click(option);

      expect(onChange).toHaveBeenCalledWith(value);
    }
  );

  it("should call new when New is selected", async () => {
    const { trigger, user, onChange, getOption } = renderComponent();

    await user.click(trigger);
    const processedOption = await getOption(/processed/i);
    await user.click(processedOption);

    await user.click(trigger);
    const newOption = await getOption(/new/i);
    await user.click(newOption);

    expect(onChange).toHaveBeenCalledWith("new");
  });
});
