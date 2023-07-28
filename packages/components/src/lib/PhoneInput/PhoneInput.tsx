import React from 'react';
import { PatternFormat } from 'react-number-format';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface PhoneInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function PhoneInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: PhoneInputProps) {
  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => (
        <PatternFormat
          format="(###) ###-####"
          allowEmptyFormatting
          customInput={Input}
          value={field.value}
          type="tel"
        />
      )}
    </ConnectInput>
  );
}

export default PhoneInput;
