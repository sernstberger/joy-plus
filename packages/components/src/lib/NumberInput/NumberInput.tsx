import React, { useState } from 'react';
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
  const [val, setVal] = useState<number | null>(null);

  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => (
        <NumericFormat
          //       {...field}
          value={val}
          thousandSeparator=","
          customInput={CustomInput}
          onValueChange={(values: any) => {
            const foo = values.floatValue;
            setVal(foo);
            field.onChange(foo);
            console.log('!!!^^^', field.name, foo, typeof foo, val);
          }}
          allowLeadingZeros={false}
        />
      )}
    </ConnectInput>
  );
}

export default NumberInput;
