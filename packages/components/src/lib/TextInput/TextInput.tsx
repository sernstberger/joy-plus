import React from 'react';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface TextInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function TextInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
  disabled = false,
  ...rest
}: TextInputProps) {
  return (
    <ConnectInput
      {...{ fieldName, label, required, helperText, defaultValue, disabled }}
      {...rest}
    >
      {({ formState, field }: any) => <Input {...field} disabled={disabled} />}
    </ConnectInput>
  );
}

export default TextInput;
