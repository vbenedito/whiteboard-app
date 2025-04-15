import { render, screen } from "@testing-library/react";
import Whiteboard from "../";
import { mockReactFlow } from "../../../../../../jest.setup";

mockReactFlow();

describe("Whiteboard", () => {
  test("should render the reactFlow", () => {
    render(<Whiteboard />);
    expect(screen.getByTestId("rf__wrapper")).toBeInTheDocument();
  });
});
