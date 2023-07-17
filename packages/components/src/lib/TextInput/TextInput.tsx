import { ConnectInput } from 'components';
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';

export interface TextInputProps {
  fieldName: string;
}

export function TextInput({ fieldName }: TextInputProps) {
  return (
    <ConnectInput>
      {({ register }: any) => (
        <FormControl
          {...register(fieldName, {
            required: true,
            max: 2,
            min: 1,
            minLength: 2,
            maxLength: 5,
          })}
        >
          <FormLabel>Label</FormLabel>
          <Input placeholder="Placeholder" />
          <FormHelperText>This is a helper text.</FormHelperText>
        </FormControl>
      )}
    </ConnectInput>
  );
}

export default TextInput;
