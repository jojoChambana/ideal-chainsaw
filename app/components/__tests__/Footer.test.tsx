import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

/**
 * @module Tests for Footer Component
 */

/**
 * @group Footer component
 * @description
 * Contains tests for the Footer component to ensure that it renders correctly and contains the expected text.
 */
describe("Footer component", () => {
  // This will run after each test in this describe block
  afterEach(() => {
    jest.restoreAllMocks();
  });
  /**
   * @test
   * Ensures that the footer is rendered with the correct text.
   */
  test("renders with the correct text", () => {
    render(<Footer />);

    // Expect the footer to contain the text "This is the footer"
    const footerText = screen.getByText("This is the footer");
    expect(footerText).toBeInTheDocument();
  });

  /**
   * @test
   * Ensures that the footer is rendered with the correct styles.
   */
  test("has the correct styles", () => {
    const { container } = render(<Footer />);

    // Check for specific styles, such as fixed positioning
    expect(container.firstChild).toHaveStyle({
      position: "fixed",
      bottom: "0",
      width: "100%",
      zIndex: "1",
    });
  });
});
