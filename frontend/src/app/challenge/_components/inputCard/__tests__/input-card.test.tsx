import { fireEvent, render } from "@testing-library/react";
import InputCard from "..";

describe("InputCard", () => {
  test("should render without crashing", () => {
    const mockOnDragStart = jest.fn();

    const { getByPlaceholderText } = render(
      <InputCard onDragStart={mockOnDragStart} />
    );

    const inputField = getByPlaceholderText("Custom Component");
    expect(inputField).toBeInTheDocument();
  });

  test("should call onDragStart when dragging starts", () => {
    const mockOnDragStart = jest.fn();
    const { getByPlaceholderText } = render(
      <InputCard onDragStart={mockOnDragStart} />
    );

    const inputField = getByPlaceholderText("Custom Component");

    fireEvent.dragStart(inputField);

    expect(mockOnDragStart).toHaveBeenCalled();
  });

  test("should type on input and change value", () => {
    const mockOnDragStart = jest.fn();
    const { getByPlaceholderText } = render(
      <InputCard onDragStart={mockOnDragStart} />
    );

    const inputField = getByPlaceholderText("Custom Component");

    fireEvent.change(inputField, {
      target: { value: "New custom component label" },
    });

    expect(inputField).toHaveValue("New custom component label");
  });
});
