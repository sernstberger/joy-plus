import { Button, Stack } from '@mui/joy';

import { FormProvider, useForm } from 'react-hook-form';

export interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  const methods = useForm({
    defaultValues: {
      // hello: "hi"
    },
  });
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          {children}
          <Button variant="solid" color="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}

export default Form;
