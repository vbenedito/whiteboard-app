import { render, screen, fireEvent } from "@testing-library/react";
import SidebarPalette from "..";

describe("SidebarPalette", () => {
  test("should render basic components", () => {
    render(<SidebarPalette />);
    expect(screen.getByText("Componentes")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Load Balancer")).toBeInTheDocument();
  });

  test("should drag de components", () => {
    render(<SidebarPalette />);
    const dbItem = screen.getByText("Database");

    const dataTransfer = {
      setData: jest.fn(),
      effectAllowed: "",
    };

    fireEvent.dragStart(dbItem, { dataTransfer });

    expect(dataTransfer.setData).toHaveBeenCalledWith(
      "application/reactflow",
      "Database"
    );
  });
});
