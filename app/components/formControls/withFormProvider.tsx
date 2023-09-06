import React from "react";
import { FormData } from "@/components/formControls/formTypes";
import { FormProvider, useForm } from "react-hook-form";

type WithFormProviderProps = {
  type: string;
};

export const withFormProvider = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithFormProvider: React.FC<P & { type: string }> = (props) => {
    const methods = useForm<FormData>(); // Initialize form methods

    return (
      <FormProvider {...methods}>
        <Component {...props} />
      </FormProvider>
    );
  };

  WithFormProvider.displayName = `WithFormProvider(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithFormProvider;
};
