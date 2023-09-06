import React from "react";
import { useController, FieldValues, Control } from "react-hook-form";
import { FormData } from "@/components/formControls/formTypes"; // Import the FormData interface
import { TextField, TextFieldProps } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { format } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/**
 * DateSelectorProps defines the properties for the DateSelector component.
 * @param control - The control object from react-hook-form to manage form methods.
 * @param name - The name attribute for the input field, either "dateReceived" or "dateProcessed."
 * @param label - The label text for the input field.
 * @param required - Optional flag to mark the field as required, defaulting to false.
 * @param defaultValue - Optional default value for the input field, defaulting to the current date in "YYYY-MM-DD" format.
 */

interface DateSelectorProps {
  control: Control<FormData>; // Use FormData directly
  name: "dateReceived" | "dateProcessed";
  label: string;
  required?: boolean;
  defaultValue?: string;
}

/**
 * DateSelector is a React functional component that renders a date picker input field.
 * It integrates with `react-hook-form` for form handling and provides date manipulation capabilities through the `dayjs` library.
 * The component is specifically designed to handle date selection for fields `dateReceived` or `dateProcessed`.
 *
 * @param props - The properties for the DateSelector component, as defined by DateSelectorProps.
 * @param props.control - The control object provided by React Hook Form, used to manage the form state.
 * @param props.name - The name of the corresponding field within the form data.
 * @param props.label - The label text for the input field.
 * @param props.required - Optional flag to mark the field as required.
 * @param props.defaultValue - Optional default value for the input field.
 *
 * @example
 * <DateSelector control={control} name="dateReceived" label="Date Received" required />
 *
 * @returns The rendered DateSelector component containing the date picker input field.
 */

const DateSelector: React.FC<DateSelectorProps> = ({
  control,
  name,
  label,
  required = false,
  defaultValue,
}) => {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: defaultValue || dayjs().format("YYYY-MM-DD"), // Set today's date
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={dayjs(value)} // Convert to Dayjs object
        onChange={(newValue: Dayjs | null) =>
          onChange(newValue?.format("YYYY-MM-DD"))
        } // Convert back to string
      />
    </LocalizationProvider>
  );
};

export default DateSelector;
