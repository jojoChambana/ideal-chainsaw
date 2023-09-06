import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormData } from "@/components/formControls/formTypes"; // Import the FormData interface

/**
 * EmailFieldProps defines the properties for the EmailField component.
 * @param control - The control object from react-hook-form to manage form methods.
 * @param name - The name of the corresponding field within the form data.
 * @param label - Optional label text for the input field, defaulting to "Email".
 * @param required - Optional flag to mark the field as required, defaulting to false.
 */
type EmailFieldProps = {
  control: Control<FormData>; // Update the control type here
  name: string;
  label?: string;
  required?: boolean;
};

/**
 * EmailField is a React functional component that renders a text input field specifically for handling email addresses.
 * It integrates with `react-hook-form` for form handling and includes custom input validation to ensure a valid email format.
 *
 * @param props - The properties for the EmailField component, as defined by EmailFieldProps.
 * @param props.control - The control object provided by React Hook Form, used to manage the form state.
 * @param props.name - The name of the corresponding field within the form data.
 * @param props.label - Optional label text for the input field, defaulting to "Email".
 * @param props.required - Optional flag to mark the field as required.
 *
 * @example
 * <EmailField control={control} name="donorEmail" required />
 *
 * @returns The rendered EmailField component containing the text input field with email validation.
 */
const EmailField: React.FC<EmailFieldProps> = ({
  control,
  name,
  label = "Email",
  required = false,
}) => {
  return (
    <Controller
      name={name as keyof FormData} // Cast name to one of the keys in FormData
      control={control}
      rules={{
        required: required ? "Email is required" : undefined,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Invalid email address",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          error={Boolean(error)}
          helperText={error && error.message}
        />
      )}
    />
  );
};

export default EmailField;
