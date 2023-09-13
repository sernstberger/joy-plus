import { Button, Stack } from '@mui/joy';
import { FormBase } from '../FormBase/FormBase';

export interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  return (
    <FormBase>
      <Stack spacing={2}>
        {children}
        <Button variant="solid" color="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </FormBase>
  );
}

export default Form;
