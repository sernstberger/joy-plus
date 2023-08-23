import React from 'react';
import { ConnectInput } from '../ConnectInput';
import { InputProps, Option, Select } from '@mui/joy';

export interface SelectInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function SelectInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
  disabled = false,
  ...rest
}: SelectInputProps) {
  return (
    <ConnectInput
      {...{ fieldName, label, required, helperText, defaultValue, disabled }}
      {...rest}
    >
      {({ formState, field }: any) => {
        const handleChange = (
          event: React.ChangeEvent<HTMLInputElement>,
          newValue: any,
        ) => {
          field.onChange(newValue);
        };
        return (
          <Select {...field} onChange={handleChange} disabled={disabled}>
            <Option value="tech">Tech</Option>
            <Option value="health">Health</Option>
            <Option value="energy">Energy</Option>
            <Option value="construction">Construction</Option>
          </Select>
        );
      }}
    </ConnectInput>
  );
}

export default SelectInput;
