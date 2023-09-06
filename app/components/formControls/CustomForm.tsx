import React, { useEffect } from "react";

import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/components/formControls/formTypes"; // Import the FormData interface
import dayjs from "dayjs";
import Layout from "../../../pages/layout";

/**
 * CustomFormProps defines the properties expected by the CustomForm component.
 * @param children - A React.ReactNode representing the children to be rendered inside the form.
 * @param onSubmit - A function to be called when the form is submitted. It receives the form data as a parameter.
 */
type CustomFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
};

// Default values for the form fields
const defaultValues: FormData = {
  campus: "UIUC",
  dateReceived: dayjs().format("YYYY-MM-DD"),
  dateProcessed: dayjs().format("YYYY-MM-DD"),
  donorName: "",
  donorPhone: "",
  donorEmail: "",
  collegeName: "",
  preparedBy: "",
  deptName: "",
};

/**
 * CustomForm is a React functional component that renders a generic form wrapped inside a Layout component.
 * It uses React Hook Form for form state management and provides a flexible structure to include any form fields as children.
 * The FormData interface defines the structure of the expected form data, including default values for each field.
 *
 * @param props - The props for the CustomForm component, as defined by CustomFormProps.
 * @param props.children - The form fields and other elements to be rendered inside the form.
 * @param props.onSubmit - The function to be called when the form is submitted, receiving the form data.
 *
 * @example
 * <CustomForm onSubmit={handleOnSubmit}>
 *   <CustomTextField name="donorName" label="Donor Name" />
 *   // ... other form fields
 * </CustomForm>
 *
 * @returns The rendered CustomForm component, including the children and a submit button.
 */
const CustomForm: React.FC<CustomFormProps> = ({ children, onSubmit }) => {
  const methods = useForm<FormData>({
    defaultValues,
  });

  const { watch } = methods; // Destructure the watch method
  const watchedFields = watch(); // This will return all the values in the form

  useEffect(() => {
    console.log(watchedFields); // Log the changes whenever they occur
  }, [watchedFields]);

  return (
    <Layout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default CustomForm;
