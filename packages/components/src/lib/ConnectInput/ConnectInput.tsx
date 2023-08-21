import { useController } from 'react-hook-form';
import { FormControl, FormHelperText, FormLabel } from '@mui/joy';
import rules from './rules';

export interface ConnectInputProps {
  children: any;
  fieldName: string;
  label: string;
  required?: boolean;
  helperText?: string;
  defaultValue: any;
  customValidation?: any;
  labelHidden?: boolean;
}

export function ConnectInput({
  children,
  fieldName,
  label,
  required = false,
  helperText,
  defaultValue,
  customValidation,
  labelHidden = false,
}: ConnectInputProps) {
  const methods = useController({
    name: fieldName,
    // rules: {
    //   required: {
    //     value: required,
    //     message: `${label} is required.`,
    //   },
    //   // max: 2,
    //   // min: 1,
    //   // minLength: 2,
    //   // maxLength: 5
    //   validate: (value) => {
    //     console.log('validate', value);
    //     return true;
    //   },
    // },
    rules: rules({
      label: label,
      required,
      customValidation,
      // disabled,
      // minLength,
      // maxLength,
      // min,
      // max,
    }),
    defaultValue,
  });

  // console.log('methods', fieldName, methods.field.onChange);

  return (
    <FormControl
      {...methods}
      // orientation="horizontal"
      required={required}
      error={!!methods.fieldState.error?.message}
    >
      {!labelHidden && <FormLabel>{label}</FormLabel>}
      {children({ ...methods })}
      {(helperText || methods.fieldState.error) && (
        <FormHelperText>
          {methods.fieldState.error
            ? methods.fieldState.error.message
            : helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default ConnectInput;
