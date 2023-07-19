import { ConnectInput } from 'components';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@mui/joy';

export interface TextInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
}

export function TextInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
}: TextInputProps) {
  return (
    <ConnectInput>
      {({ register, formState }: any) => (
        <FormControl
          {...register(fieldName, {
            required: { value: required, message: `${label} is required.` },
            // max: 2,
            // min: 1,
            // minLength: 2,
            // maxLength: 5,
          })}
          required={required}
          error={formState.errors[fieldName]}
        >
          <FormLabel>{label}</FormLabel>
          <Input placeholder="Placeholder" />
          {/* {helperText && <FormHelperText>{helperText}</FormHelperText>} */}
          {(helperText || formState.errors[fieldName]) && (
            <FormHelperText>
              {formState.errors[fieldName]
                ? formState.errors[fieldName].message
                : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </ConnectInput>
  );
}

export default TextInput;
