import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * Check Component
 *
 * This React functional component is responsible for rendering the donation form specifically for check donations.
 * It utilizes the DonationForm component, passing the donation type as "Check".
 *
 * @example
 * <Check />
 *
 * @returns The rendered DonationForm component for check donations.
 */
const Check: React.FC = () => {
  return <DonationForm type="Check" />;
};

export default withFormProvider(Check);
