import React from "react";
import { Box } from "@mui/material";
import CustomTextField from "@/components/formControls/CustomTextField";
import CampusRadioInput from "@/components/elements/CampusRadioInput";
import { FormData } from "@/components/formControls/formTypes";
import EmailField from "../formControls/EmailField";
import DomesticPhoneNumber from "../formControls/DomesticPhoneNumber";
import DateSelector from "../formControls/DateSelector";
import { useFormContext } from "react-hook-form";

/**
 * A React functional component that renders a form to collect donor-related information.
 * The form includes various input fields to capture details such as the donor's name, phone number, email,
 * college name, date received, prepared by, date processed, and department name.
 * The form leverages reusable components like `CustomTextField`, `EmailField`, `DomesticPhoneNumber`, and `DateSelector`.
 * Additional input fields can be added as needed.
 *
 * @example
 * <DonorForm />
 *
 * @returns The rendered DonorForm component containing the appropriate form fields.
 */
const DonorForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    reset,
  } = useFormContext<FormData>();

  return (
    <Box>
      <CampusRadioInput control={control} />
      <CustomTextField
        control={control}
        name="donorName"
        label="Contact Full Name"
        required
      />
      <DomesticPhoneNumber
        control={control}
        name="donorPhone"
        label="Contact Phone Number"
        required
      />
      <EmailField
        control={control}
        name="donorEmail"
        label="Contact Email"
        required
      />
      <CustomTextField
        control={control}
        name="collegeName"
        label="College Name"
        required
      />
      <DateSelector
        control={control}
        name="dateReceived"
        label="Date Received"
        required
      />
      <CustomTextField
        control={control}
        name="preparedBy"
        label="Prepared By"
        required
      />
      <DateSelector
        control={control}
        name="dateProcessed"
        label="Date Processed"
        required
      />
      <CustomTextField
        control={control}
        name="deptName"
        label="Department Name"
        required
      />
      {/* Add more input fields as needed */}
    </Box>
  );
};

export default DonorForm;
