import React from 'react';
import List, { ListProps } from '@mui/joy/List';
import NavListItem, { NavListItemProps } from './NavListItem';

interface NavListProps extends ListProps {
  links: NavListItemProps[];
}

export function NavList(props: NavListProps) {
  return (
    <List
      {...props}
      sx={{
        '--ListItem-radius': '8px',
        '--List-gap': '4px',
        '--List-nestedInsetStart': '40px',
      }}
    >
      {props.links.map((bar: NavListItemProps) => {
        return <NavListItem {...bar} />;
      })}
    </List>
  );
}

export default NavList;
