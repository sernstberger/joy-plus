import React from 'react';
import { PatternFormat } from 'react-number-format';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface FeinInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function FeinInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: FeinInputProps) {
  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => (
        <PatternFormat
          format="##-#######"
          allowEmptyFormatting
          customInput={Input}
          {...field}
          ref={undefined}
        />
      )}
    </ConnectInput>
  );
}

export default FeinInput;
