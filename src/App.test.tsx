import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

describe("App", () => {
  beforeEach(() => {
    /**
     * we are mocking at each test case because, react cli automatically resets
     * the mocks after each test case
     */
    jest.mock("./services/token.service", () => ({
      getTokens: jest.fn(() => Promise.resolve([]) as any),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders App component", async () => {
    render(<App />);

    await act(async () => {
      const linkElement = await screen.findByText(/Swap anytime, anywhere/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
