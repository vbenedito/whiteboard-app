/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook } from "@testing-library/react";
import useAIChat from "../useAIChat";

describe("useAIChat", () => {
  let result: ReturnType<typeof useAIChat>;
  let setInput: jest.Mock;
  let handleSend: () => void;
  let input = "";

  beforeEach(() => {
    jest.clearAllMocks();

    Object.defineProperty(globalThis, "crypto", {
      value: {
        randomUUID: jest.fn(() => "mocked-uuid"),
      },
    });

    const { result: hookResult } = renderHook(() => useAIChat());
    result = hookResult.current;
    setInput = result.setInput as jest.Mock;
    handleSend = result.handleSend;
    input = result.input;
  });

  test("should initialize with empty messages and input", () => {
    expect(result.messages).toEqual([]);
    expect(input).toBe("");
  });

  test("should not send empty input", () => {
    act(() => {
      handleSend();
    });
    expect(result.messages).toEqual([]);
  });

  test("should send non-empty input", () => {
    const { result } = renderHook(() => useAIChat());

    act(() => {
      result.current.setInput("Hello, AI!");
    });

    act(() => {
      result.current.handleSend();
    });

    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0]).toEqual({
      id: expect.any(String),
      text: "Hello, AI!",
      type: "user",
    });
  });

  test("should not send empty input", () => {
    const { result } = renderHook(() => useAIChat());

    act(() => {
      result.current.setInput("   ");
      result.current.handleSend();
    });

    expect(result.current.messages).toHaveLength(0);
  });

  test("should clear input after sending", () => {
    act(() => {
      setInput("Hello, AI!");
      handleSend();
    });
    expect(input).toBe("");
  });
});
