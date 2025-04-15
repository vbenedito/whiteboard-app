import { renderHook, act } from "@testing-library/react";
import { useWhiteboardHandlers } from "../useWhiteboardHandlers";

describe("useWhiteboardHandlers", () => {
  test("should add a new node on drop", () => {
    const setNodes = jest.fn((fn) => {
      fn([]);
    });
    const setEdges = jest.fn();

    const { result } = renderHook(() =>
      useWhiteboardHandlers({ setNodes, setEdges })
    );

    const mockEvent = {
      preventDefault: jest.fn(),
      clientX: 500,
      clientY: 300,
      dataTransfer: {
        getData: jest.fn(() => "TestNode"),
      },
    } as unknown as React.DragEvent;

    act(() => {
      result.current.onDrop(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(setNodes).toHaveBeenCalled();
  });

  test("should update edges on connect", () => {
    const setEdges = jest.fn((fn) => {
      fn([]);
    });
    const setNodes = jest.fn();

    const { result } = renderHook(() =>
      useWhiteboardHandlers({ setNodes, setEdges })
    );

    const connection = {
      source: "1",
      target: "2",
      sourceHandle: null,
      targetHandle: null,
    };

    act(() => {
      result.current.onConnect(connection);
    });

    expect(setEdges).toHaveBeenCalled();
  });

  test("should call preventDefault on drag over", () => {
    const setEdges = jest.fn();
    const setNodes = jest.fn();

    const { result } = renderHook(() =>
      useWhiteboardHandlers({ setNodes, setEdges })
    );

    const event = {
      preventDefault: jest.fn(),
      dataTransfer: {
        dropEffect: "",
      },
    } as unknown as React.DragEvent;

    act(() => {
      result.current.onDragOver(event);
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.dataTransfer.dropEffect).toBe("move");
  });
});
