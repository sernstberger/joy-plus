import React from 'react';
import { Box } from '@mui/joy';
import { FieldError, FieldErrors } from 'react-hook-form';

type FormError = FieldError & { fieldName: string };

export interface FormErrorsProps {
  errors: FieldErrors;
}

export function FormErrors(props: FormErrorsProps) {
  const { errors } = props;
  const errorArray = Object.entries(errors).map(([key, value]) => {
    return { ...value, fieldName: key };
  });
  if (errorArray.length === 0) return null;
  return (
    <Box
      sx={{ color: 'error.contrastText', backgroundColor: 'error.main' }}
      padding={2}
    >
      <ul>
        {/* {errorArray.map((error: FormError) => { */}
        {errorArray.map((error: any) => {
          return (
            <li key={error.fieldName}>
              <span>{error.message}</span>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FormErrors;
