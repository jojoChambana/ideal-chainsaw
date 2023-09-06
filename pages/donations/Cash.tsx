// Cash.tsx
import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * Cash Component
 *
 * This React functional component is responsible for rendering the donation form specifically for cash donations.
 * It utilizes the DonationForm component, passing the donation type as "Cash".
 *
 * @example
 * <Cash />
 *
 * @returns The rendered DonationForm component for cash donations.
 */
const Cash: React.FC = () => {
  return <DonationForm type="Cash" />;
};

export default withFormProvider(Cash);
