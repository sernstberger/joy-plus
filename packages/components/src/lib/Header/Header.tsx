import React from 'react';
import { Button, Stack, Typography } from '@mui/joy';

export interface HeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
}

export function Header({ title, subtitle = null, action = null }: HeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <div>
        <Typography level="h1">{title}</Typography>
        {subtitle && <Typography level="h2">{subtitle}</Typography>}
      </div>
      {action && <div>{action}</div>}
    </Stack>
  );
}

export default Header;
