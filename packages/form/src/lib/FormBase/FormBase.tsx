import { DevTool } from '@hookform/devtools';
import { FormProvider, useForm } from 'react-hook-form';

export interface FormBaseProps {
  children: React.ReactNode;
}

export function FormBase({ children }: FormBaseProps) {
  // const methods = useForm({
  //   defaultValues: {
  //     // hello: "hi"
  //     test: 'hi',
  //   },
  // });
  const methods = useForm();
  // const onSubmit = (data: any) => console.log('***', JSON.stringify(data));
  // const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
      <DevTool control={methods.control} /> {/* set up the dev tool */}
    </FormProvider>
  );
}

export default FormBase;
