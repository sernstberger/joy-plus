import { Button } from '@mui/joy';

import { FormProvider, useForm } from 'react-hook-form';

export interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        {children}
        <Button variant="solid" color="primary">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}

export default Form;
