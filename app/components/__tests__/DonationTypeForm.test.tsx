import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { useFormContext, FormProvider } from "react-hook-form";
import DonationForm from "../donationForms/DonationTypeForm";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  useFormContext: jest.fn(),
  FormProvider: ({ children }: { children: React.ReactNode }) => children,
}));

describe("<DonationForm />", () => {
  it("renders without crashing", () => {
    // Mock useRouter and useFormContext
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/donations/Cash",
    });

    (useFormContext as jest.Mock).mockReturnValue({
      watch: jest.fn(() => ({
        campus: "UIUC",
        collegeName: "UIUC",
        dateProcessed: "2023-08-29",
        dateReceived: "2023-08-29",
        donorEmail: "joe@joe.com",
        donorName: "Joe",
        donorPhone: "1234567890",
        preparedBy: "Joe",
      })),
      handleSubmit: jest.fn(),
      register: jest.fn(),
    });

    // Render the component and perform tests
    const { getByText } = render(<DonationForm type="Cash" />);

    // Debugging the screen, remove this in production
    screen.debug();

    // Your expectations here
    expect(getByText("Cash")).toBeInTheDocument();
  });
});
