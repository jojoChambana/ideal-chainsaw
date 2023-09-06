import DonationForm from "@/components/donationForms/DonationTypeForm";
import { withFormProvider } from "@/components/formControls/withFormProvider";
import React from "react";

/**
 * GiftInKind Component
 *
 * This React functional component is responsible for rendering the donation form specifically for gift in kind donations.
 * It utilizes the DonationForm component, passing the donation type as "Gift In Kind".
 *
 * @example
 * <GiftInKind />
 *
 * @returns The rendered DonationForm component for gift in kind donations.
 */
const GiftInKind: React.FC = () => {
  return <DonationForm type="Gift In Kind" />;
};

export default withFormProvider(GiftInKind);
