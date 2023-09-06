import React from "react";
import { useErrorBoundary } from "use-error-boundary";
import CustomForm from "@/components/formControls/CustomForm";
import { FormData } from "@/components/formControls/formTypes";
import { shouldShowInstructions } from "@/components/helpers";
import InstructionsCashCheckGIK from "@/components/InstructionsCashCheckGIK";
import { useRouter } from "next/router";
import DonorForm from "./DonorDetailsForm";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

/**
 * A React functional component that renders a form for handling donations of different types.
 * It wraps the form inside the `CustomForm` component and uses `DonorForm` to render donation-specific details.
 * Depending on the provided type, it may render additional instructions for handling Cash, Check, or Gift In Kind donations.
 *
 * @param props - The props for the DonationForm component.
 * @param props.type - The type of the donation, used to determine specific handling instructions.
 *
 * @example
 * <DonationForm type="Cash" />
 *
 * @returns The rendered DonationForm component containing the appropriate form fields and instructions.
 */

const DonationForm: React.FC<{
  type: "Cash" | "Check" | "Gift In Kind" | "Securities" | "Trust" | "Wire";
}> = ({ type }) => {
  console.log("DonationForm props:", { type }); // Debug line
  const router = useRouter();
  const route = router.pathname;
  const { watch } = useFormContext<FormData>();
  const watchedFields = watch(); // This will return all the values in the form

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const methods = useForm<FormData>();
  return (
    <FormProvider {...methods}>
      <CustomForm onSubmit={onSubmit}>
        {shouldShowInstructions(route) && <InstructionsCashCheckGIK />}
        <DonorForm />
      </CustomForm>
    </FormProvider>
  );
};

export default DonationForm;
