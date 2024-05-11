
import { FormProvider, useForm } from "react-hook-form";

const MainForm = ({ onSubmit, children, defaultValues }) => {
  const formConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const method = useForm(formConfig);
  const { handleSubmit } = method;

  return (
    <FormProvider {...method}>
      <form
       onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default MainForm;