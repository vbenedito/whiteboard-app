import { renderHook, act } from "@testing-library/react";
import { useWhiteboardState } from "../useWhiteboardState";

describe("useWhiteboardState", () => {
  test("should initialize with empty nodes and edges", () => {
    const { result } = renderHook(() => useWhiteboardState());

    expect(result.current.nodes).toEqual([]);
    expect(result.current.edges).toEqual([]);
  });

  test("should allow updating nodes", () => {
    const { result } = renderHook(() => useWhiteboardState());

    act(() => {
      result.current.setNodes([
        {
          id: "1",
          position: { x: 0, y: 0 },
          data: { label: "Test" },
          type: "default",
        },
      ]);
    });

    expect(result.current.nodes).toHaveLength(1);
    expect(result.current.nodes[0].id).toBe("1");
  });

  test("should allow updating edges", () => {
    const { result } = renderHook(() => useWhiteboardState());

    act(() => {
      result.current.setEdges([{ id: "e1-2", source: "1", target: "2" }]);
    });

    expect(result.current.edges).toHaveLength(1);
    expect(result.current.edges[0].source).toBe("1");
  });
});
