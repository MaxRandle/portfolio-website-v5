import { render, screen, fireEvent } from "@testing-library/react";
import NavDemo from "./NavDemo";

describe("NavDemo Escape key behavior", () => {
  it("closes only the focused menu and its open children when Escape is pressed from summary", () => {
    render(<NavDemo />);

    // Open Products menu
    const productsSummary = screen.getByText("Products");
    fireEvent.click(productsSummary);
    const productsDetails = productsSummary.closest("details");
    expect(productsDetails?.hasAttribute("open")).toBe(true);

    // Open Tools submenu
    const toolsSummary = screen.getByText("Tools");
    fireEvent.click(toolsSummary);
    const toolsDetails = toolsSummary.closest("details");
    expect(toolsDetails?.hasAttribute("open")).toBe(true);

    // Focus Tools summary
    toolsSummary.focus();
    expect(document.activeElement).toBe(toolsSummary);

    // Press Escape
    fireEvent.keyDown(toolsSummary, { key: "Escape" });

    // Tools menu should be closed
    expect(toolsDetails?.hasAttribute("open")).toBe(false);
    // Products menu should remain open
    expect(productsDetails?.hasAttribute("open")).toBe(true);
  });

  it("closes the nearest open menu when Escape is pressed from a child element", () => {
    render(<NavDemo />);

    // Open Products menu
    const productsSummary = screen.getByText("Products");
    fireEvent.click(productsSummary);
    const productsDetails = productsSummary.closest("details");
    expect(productsDetails?.hasAttribute("open")).toBe(true);

    // Open Widgets submenu
    const widgetsLink = screen.getByText("Widgets");
    widgetsLink.focus();
    expect(document.activeElement).toBe(widgetsLink);

    // Press Escape
    fireEvent.keyDown(widgetsLink, { key: "Escape" });

    // Products menu should be closed
    expect(productsDetails?.hasAttribute("open")).toBe(false);
  });
});
