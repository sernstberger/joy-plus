import { NumericFormat } from 'react-number-format';
import { ConnectInput } from '../ConnectInput';
import { Input, InputProps } from '@mui/joy';

export interface NumberInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

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
          allowLeadingZeros
          thousandSeparator=","
          customInput={Input}
          placeholder="Placeholder"
          value={field.value}
        />
      )}
    </ConnectInput>
  );
}

export default NumberInput;
