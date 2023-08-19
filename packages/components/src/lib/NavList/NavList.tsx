import React from 'react';
import List, { ListProps } from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { ExpandLess, ExpandMore, Home } from '@mui/icons-material';

interface NavListItemProps {
  title: string;
}

const foo: NavListItemProps[] = [
  {
    title: 'Home',
  },
  {
    title: 'Quote',
  },
  {
    title: 'Resources',
  },
  {
    title: 'Reports',
  },
];

const NavListItem = ({ title }: NavListItemProps) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemDecorator>
          <Home />
        </ListItemDecorator>
        <ListItemContent>{title}</ListItemContent>
        <ExpandMore />
      </ListItemButton>
    </ListItem>
  );
};

export function NavList(props: ListProps) {
  return (
    <List
      {...props}
      sx={{
        '--ListItem-radius': '8px',
        '--List-gap': '4px',
        '--List-nestedInsetStart': '40px',
      }}
    >
      {foo.map((bar: NavListItemProps) => {
        return <NavListItem {...bar} />;
      })}

      <ListItem nested>
        <ListItemButton>
          <ListItemDecorator>
            <Home />
          </ListItemDecorator>
          <ListItemContent>Messages</ListItemContent>
          {/* <i data-feather="chevron-up" /> */}
          <ExpandLess />
        </ListItemButton>
        <List>
          <ListItem>
            <ListItemButton selected color="primary">
              View all
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Your team</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Archived</ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}

export default NavList;
