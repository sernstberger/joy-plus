import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';
import * as yup from 'yup';

export interface EmailInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function EmailInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: EmailInputProps) {
  return (
    <ConnectInput
      {...{ fieldName, label, required, helperText, defaultValue }}
      customValidation={yup.string().email().required()}
    >
      {({ formState, field }: any) => (
        <Input value={field.value} type="email" />
      )}
    </ConnectInput>
  );
}

export default EmailInput;
