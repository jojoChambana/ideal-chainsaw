import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * Securities Component
 *
 * This React functional component is responsible for rendering the donation form specifically for securities donations.
 * It utilizes the DonationForm component, passing the donation type as "securities".
 *
 * @example
 * <Securities />
 *
 * @returns The rendered DonationForm component for securities donations.
 */
const Securities: React.FC = () => {
  return <DonationForm type="Securities" />;
};

export default withFormProvider(Securities);
