import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { useRouter } from "next/router";

/**
 * @module Tests for Header Component
 */

/**
 * @constant route
 * Defines the route for testing purposes.
 */
const route = "/cash";

/**
 * @function mock
 * Mocks the 'useRouter' hook from Next.js to return the specific pathname for the tests.
 */
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ pathname: route }),
}));

/**
 * @description
 * Contains tests for the Header component.
 *
 * @group Header component
 */
describe("Header component", () => {
  // This will run after each test in this describe block
  afterEach(() => {
    jest.restoreAllMocks();
  });
  /**
   * @test
   * Ensures that the logo is rendered in the header.
   */
  test("renders with logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("UIF Logo");
    expect(logo).toBeInTheDocument();
  });

  /**
   * @test
   * Ensures that clicking the logo redirects to the home page.
   */
  test("logo redirects to home page on click", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/cash",
      push: mockPush,
    });

    const { getByAltText } = render(<Header />);
    const logo = getByAltText("UIF Logo");
    fireEvent.click(logo);

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  /**
   * @test
   * Checks if the page title updates based on the route.
   */
  test("page title updates based on route", () => {
    render(<Header />);
    const suffix = route.toLowerCase() === "/" ? "Forms" : "Form";
    const fullTitle = `Cash Transmittal ${suffix}`;
    const pageTitle = screen.getByText(fullTitle);
    expect(pageTitle).toBeInTheDocument();
  });

  /**
   * @test
   * Ensures that the navigation links are present on larger screens.
   */
  test("navigation links are present on larger screens", () => {
    // Override the useMediaQuery hook to simulate a non-mobile screen size
    jest.mock("@mui/material/useMediaQuery", () => () => false);
    render(<Header />);

    // Check for the presence of specific links
    const allLinks = screen.getAllByRole("link");
    allLinks.forEach((link) => console.log("Link:", link.textContent));

    const navigationLink = screen.getByRole("link", { name: "Cash" });
    expect(navigationLink).toBeInTheDocument();
  });
});
