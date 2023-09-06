import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * Trust Component
 *
 * This React functional component is responsible for rendering the donation form specifically for tristdonations.
 * It utilizes the DonationForm component, passing the donation type as "Trust".
 *
 * @example
 * <Trust />
 *
 * @returns The rendered DonationForm component for trust donations.
 */
const Trust: React.FC = () => {
  return <DonationForm type="Trust" />;
};

export default withFormProvider(Trust);
