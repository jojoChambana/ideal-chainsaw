import { Control, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { FormData } from "@/components/formControls/formTypes"; // Import the FormData interface

/**
 * CustomTextFieldProps extends the TextFieldProps from MUI and includes additional properties specific to this custom component.
 * @param control - A React Hook Form control object used to manage the form state.
 * @param name - A key from FormData that identifies the specific field within the form data object.
 * @param rules - Optional validation rules to be applied to the TextField.
 */
type CustomTextFieldProps = TextFieldProps & {
  control: Control<FormData>; // Update the control type
  name: keyof FormData; // Use keyof to restrict the name prop to the keys of FormData
  rules?: Record<string, any>;
};

/**
 * CustomTextField is a React functional component that wraps MUI's TextField component within a Controller from React Hook Form.
 * It provides a custom interface for handling form state while maintaining the flexibility and styling of MUI's TextField.
 *
 * @param props - The props for the CustomTextField component, as defined by CustomTextFieldProps.
 * @param props.control - The control object provided by React Hook Form, used to manage the form state.
 * @param props.name - The name of the corresponding field within the form data, used to identify and manage the field value.
 * @param props.rules - Optional validation rules to be applied to the TextField.
 * @param {...textFieldProps} - Additional props to be passed down to the underlying MUI TextField component.
 *
 * @example
 * <CustomTextField control={control} name="donorName" label="Donor Name" required />
 *
 * @returns The rendered CustomTextField component, including a Controller that manages the form state and an MUI TextField for user input.
 */
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  control,
  name,
  rules,
  ...textFieldProps
}) => {
  return (
    <Controller
      name={name} // Use the name prop here
      control={control}
      rules={rules}
      render={({ field }) => <TextField {...field} {...textFieldProps} />}
    />
  );
};

export default CustomTextField;
