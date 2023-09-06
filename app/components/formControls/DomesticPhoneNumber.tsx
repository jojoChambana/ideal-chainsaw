import { Control, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormData } from "@/components/formControls/formTypes"; // Import the FormData interface

/**
 * DomesticPhoneNumberProps defines the properties for the DomesticPhoneNumber component.
 * @param control - The control object from react-hook-form to manage form methods.
 * @param name - A key from FormData that identifies the specific field within the form data object.
 * @param label - The label text for the input field.
 * @param required - Optional flag to mark the field as required, defaulting to false.
 */
type DomesticPhoneNumberProps = {
  control: Control<FormData>; // Correct the control type
  name: keyof FormData; // Specify the name type to match FormData keys
  label: string;
  required?: boolean;
};

/**
 * DomesticPhoneNumber is a React functional component that renders a text input field specifically for handling domestic phone numbers.
 * It integrates with `react-hook-form` for form handling and includes custom input validation to ensure a valid phone number format.
 *
 * @param props - The properties for the DomesticPhoneNumber component, as defined by DomesticPhoneNumberProps.
 * @param props.control - The control object provided by React Hook Form, used to manage the form state.
 * @param props.name - The name of the corresponding field within the form data.
 * @param props.label - The label text for the input field.
 * @param props.required - Optional flag to mark the field as required.
 *
 * @example
 * <DomesticPhoneNumber control={control} name="donorPhone" label="Phone Number" required />
 *
 * @returns The rendered DomesticPhoneNumber component containing the text input field with phone number validation.
 */
const DomesticPhoneNumber: React.FC<DomesticPhoneNumberProps> = ({
  control,
  name,
  label,
  required,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? "Phone number is required" : undefined,
        pattern: {
          value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/i,
          message: "Invalid phone number",
        },
      }}
      render={({
        field: { onChange, ...fieldProps },
        fieldState: { error },
      }) => (
        <TextField
          {...fieldProps}
          onChange={(e) => {
            // Allow only digits and hyphens
            const value = e.target.value.replace(/[^\d-]/g, "");
            onChange(value);
          }}
          label={label}
          variant="outlined"
          error={Boolean(error)}
          helperText={error && error.message}
        />
      )}
    />
  );
};

export default DomesticPhoneNumber;
