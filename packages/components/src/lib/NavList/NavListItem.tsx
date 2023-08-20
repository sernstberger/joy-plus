import React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { ExpandMore, Home } from '@mui/icons-material';

export interface NavListItemProps {
  title: string;
  children?: Omit<NavListItemProps[], 'children'>;
}

export const NavListItem = ({ children, title }: NavListItemProps) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = children && children.length > 0;

  const handleOpenChange = React.useCallback(
    (event: React.SyntheticEvent | null, isOpen: boolean) => {
      setOpen(isOpen);
    },
    [],
  );

  return (
    <ListItem nested={hasChildren}>
      <ListItemButton
        selected
        // color="primary"
        onClick={() => setOpen(!open)}
      >
        <ListItemDecorator>
          <Home />
        </ListItemDecorator>
        <ListItemContent>{title}</ListItemContent>
        {hasChildren && <ExpandMore />}
      </ListItemButton>

      {hasChildren && open && (
        <List>
          {children.map((child: NavListItemProps) => {
            return <NavListItem {...child} />;
          })}
        </List>
      )}

      {/* <Dropdown open={open} onOpenChange={handleOpenChange}>
        <MenuButton>Actions</MenuButton>
        <Menu>
          <MenuItem>Add item</MenuItem>
        </Menu>
      </Dropdown> */}
    </ListItem>
  );
};

export default NavListItem;
