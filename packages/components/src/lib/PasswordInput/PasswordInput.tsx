import { ConnectInput } from '../ConnectInput';
import { IconButton, Input, InputProps } from '@mui/joy';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';
import { UseControllerReturn } from 'react-hook-form';
YupPassword(yup);

export interface PasswordInputProps extends InputProps {
  fieldName: string;
  label: string;
  helperText?: string;
  defaultValue?: string;
}

export function PasswordInput({
  fieldName,
  label,
  helperText = undefined,
  required = false,
  defaultValue,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ConnectInput
      {...{ fieldName, label, required, helperText, defaultValue }}
      customValidation={yup
        .string()
        .required()
        .min(
          8,
          'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
        )
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character')}
    >
      {({ field }: UseControllerReturn) => (
        <Input
          value={field.value}
          type={showPassword ? 'text' : 'password'}
          endDecorator={
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              variant="plain"
              color="neutral"
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </IconButton>
          }
        />
      )}
    </ConnectInput>
  );
}

export default PasswordInput;
