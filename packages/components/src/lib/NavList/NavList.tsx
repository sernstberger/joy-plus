import React from 'react';
import List, { ListProps } from '@mui/joy/List';
import NavListItem, { NavListItemProps } from './NavListItem';

interface NavListProps extends ListProps {
  links: NavListItemProps[];
  orientation?: 'horizontal' | 'vertical';
  // nav: {
  //   title: string;
  //   icon?: React.ReactNode;
  // }[]
}

export function NavList(props: NavListProps) {
  return (
    <List
      {...props}
      orientation={props.orientation}
      color="primary"
      variant="outlined"
      // sx={{
      //   '--ListItem-radius': '8px',
      //   '--List-gap': '4px',
      //   '--List-nestedInsetStart': '40px',
      // }}
    >
      {props.links.map((link: NavListItemProps) => {
        return <NavListItem key={link.title} {...link} />;
      })}
    </List>
  );
}

export default NavList;
