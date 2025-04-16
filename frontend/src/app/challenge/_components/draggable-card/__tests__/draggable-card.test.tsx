import { fireEvent, render } from "@testing-library/react";
import DraggableCard from "..";

describe("DraggableCard", () => {
  test("should render correctly", () => {
    const mockProps = {
      type: "test-type",
      label: "Test Label",
      onDragStart: jest.fn(),
    };

    const { getByText } = render(<DraggableCard {...mockProps} />);

    expect(getByText(mockProps.label)).toBeInTheDocument();
  });

  test("should call onDragStart when dragged", () => {
    const mockProps = {
      type: "test-type",
      label: "Test Label",
      onDragStart: jest.fn(),
    };

    const { getByText } = render(<DraggableCard {...mockProps} />);

    fireEvent.dragStart(getByText(mockProps.label));

    expect(mockProps.onDragStart).toHaveBeenCalledWith(
      expect.any(Object),
      mockProps.label
    );
  });
});
