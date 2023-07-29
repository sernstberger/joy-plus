import React from 'react';
import { NumericFormat } from 'react-number-format';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface NumberInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

const CustomInput = React.forwardRef((props: any, ref) => (
  <Input
    {...props}
    ref={ref}
    slotProps={{
      input: {
        inputMode: 'numeric',
        // inputMode: 'decimal',
      },
    }}
  />
));

export function NumberInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: NumberInputProps) {
  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => (
        <NumericFormat
          allowLeadingZeros={false}
          thousandSeparator=","
          customInput={CustomInput}
          value={field.value}
        />
      )}
    </ConnectInput>
  );
}

export default NumberInput;
