import VerticalTabs from "./VerticalTabs.svelte";
import { render, screen } from "@testing-library/svelte";

describe("VerticalTabs Component", () => {
  test("should switch tabs", async () => {
    render(VerticalTabs);

    const secondTabElement = screen.getByText(/Second Tab/i);

    fireEvent.click(secondTabElement);

    await screen.findByText(/Second Tab Heading/i);
  });
});
