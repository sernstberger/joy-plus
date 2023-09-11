import React from 'react';
import { Grid, Stack, Typography } from '@mui/joy';

export interface FormGroupProps {
  id: string;
  primary: string;
  secondary?: string;
  children: React.ReactNode;
}

export const FormGroup = ({
  children,
  primary,
  secondary,
  id,
}: FormGroupProps) => {
  return (
    <Grid container role="group" aria-labelledby={id}>
      <Grid xs={12} sm={4}>
        <Typography fontWeight="bold" id={id}>
          {primary}
        </Typography>
        {secondary && <Typography level="body-sm">{secondary}</Typography>}
      </Grid>
      <Grid xs={12} sm={8}>
        <Stack
          spacing={2}
          // alignItems="flex-start"
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FormGroup;
