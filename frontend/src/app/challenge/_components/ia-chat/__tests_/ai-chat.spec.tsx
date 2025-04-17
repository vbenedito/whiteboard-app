import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatPanel from "..";

describe("AI Chat", () => {
  const mockMessages = [
    { id: "1", text: "Hello", type: "user" as const },
    { id: "2", text: "Hi there!", type: "interviewer" as const },
  ];
  const mockHandleSend = jest.fn();
  const mockSetInput = jest.fn();
  const mockInput = "";

  test("AI Chat renders correctly", () => {
    render(
      <ChatPanel
        messages={mockMessages}
        handleSend={mockHandleSend}
        input={mockInput}
        setInput={mockSetInput}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hi there!")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Digite sua pergunta...")
    ).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });

  test("AI Chat handles input change", async () => {
    render(
      <ChatPanel
        messages={mockMessages}
        handleSend={mockHandleSend}
        input={mockInput}
        setInput={mockSetInput}
      />
    );

    const textarea = screen.getByPlaceholderText(
      "Digite sua pergunta..."
    ) as HTMLTextAreaElement;

    await userEvent.type(textarea, "New message");

    const sendButton = screen.getByTestId("send-button");

    await userEvent.click(sendButton);

    expect(mockHandleSend).toHaveBeenCalled();
    expect(mockSetInput).toHaveBeenCalled();
  });
});
