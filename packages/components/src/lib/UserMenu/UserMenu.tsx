import React from 'react';
import Typography from '@mui/joy/Typography';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

export function UserMenu() {
  return (
    <Dropdown>
      <MenuButton
        variant="plain"
        sx={{ alignItems: 'flex-start', flexDirection: 'column' }}
      >
        <Typography fontSize="sm" fontWeight="lg">
          Steve E.
        </Typography>
        <Typography level="body-xs">@steveEberger</Typography>
      </MenuButton>
      <Menu sx={{ zIndex: 10001 }}>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
  );
}

export default UserMenu;
