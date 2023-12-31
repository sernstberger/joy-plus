import React from 'react';
import List from '@mui/joy/List';
import ListItem, { ListItemProps } from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { ExpandMore } from '@mui/icons-material';
import { NavLink, useMatch } from 'react-router-dom';
export interface NavListItemProps extends ListItemProps {
  // children?: Omit<NavListItemProps[], 'children'>;

  title: string;
  icon?: React.ReactNode;
  to: string;
}

export const NavListItem = ({ title, to, icon, ...rest }: NavListItemProps) => {
  // const [open, setOpen] = React.useState(false);
  // const hasChildren = children && children.length > 0;

  // const handleOpenChange = React.useCallback(
  //   (event: React.SyntheticEvent | null, isOpen: boolean) => {
  //     setOpen(isOpen);
  //   },
  //   [],
  // );

  const selected: boolean = !!useMatch(to);

  return (
    <ListItem
      {...rest}
      // nested={hasChildren}
    >
      <ListItemButton
        selected={selected}
        // color="primary"
        // onClick={() => setOpen(!open)}
        component={NavLink}
        to={to}
      >
        {icon && <ListItemDecorator>{icon}</ListItemDecorator>}
        <ListItemContent>{title}</ListItemContent>
        {/* {hasChildren && <ExpandMore />} */}
      </ListItemButton>

      {/* {hasChildren && open && (
        <List>
          {children.map((child: NavListItemProps) => {
            return <NavListItem {...child} />;
          })}
        </List>
      )} */}

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

// export function Nav({ orientation = 'vertical', nav }: NavProps) {
//   return (
//     <List>
//       {nav.map(({ title, icon }) => {
//         return (
//           <ListItem>
//             <ListItemButton>
//               {icon && <ListItemDecorator>{icon}</ListItemDecorator>}
//               <ListItemContent>{title}</ListItemContent>
//               {/* <KeyboardArrowRight /> */}
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
