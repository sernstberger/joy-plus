import React from 'react';
import { ConnectInput } from '../ConnectInput';
import { Checkbox, CheckboxProps } from '@mui/joy';

export interface CheckboxInputProps extends CheckboxProps {
  fieldName: string;
  label: string;
  helperText?: string;
  // defaultValue?: boolean;
}

export function CheckboxInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue = undefined,
  defaultChecked = false,
}: CheckboxInputProps) {
  return (
    <ConnectInput
      {...{
        fieldName,
        label,
        required,
        helperText,
        defaultValue,
        defaultChecked,
      }}
      labelHidden
    >
      {({ formState, field }: any) => (
        <Checkbox label={label} required value={field.value} />
      )}
    </ConnectInput>
  );
}

export default CheckboxInput;
