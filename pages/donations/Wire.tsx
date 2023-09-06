import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * Wire Component
 *
 * This React functional component is responsible for rendering the donation form specifically for wire donations.
 * It utilizes the DonationForm component, passing the donation type as "wire".
 *
 * @example
 * <Wire />
 *
 * @returns The rendered DonationForm component for wire donations.
 */
const Wire: React.FC = () => {
  return <DonationForm type="Wire" />;
};

export default withFormProvider(Wire);
