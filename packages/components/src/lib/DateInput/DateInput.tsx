import React from 'react';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface DateInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function DateInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: DateInputProps) {
  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => <Input value={field.value} type="date" />}
    </ConnectInput>
  );
}

export default DateInput;
