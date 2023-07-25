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
}: TextInputProps) {
  return (
    <ConnectInput {...{ fieldName, label, required, helperText, defaultValue }}>
      {({ formState, field }: any) => <Input value={field.value} />}
    </ConnectInput>
  );
}

export default TextInput;
