import React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { ExpandMore } from '@mui/icons-material';

interface NavListItemProps {
  title: string;
}

const foo: NavListItemProps[] = [
  {
    title: 'Home',
  },
];

const NavListItem = ({ title }: NavListItemProps) => {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemDecorator>
          <i data-feather="home" />
        </ListItemDecorator>
        <ListItemContent>{title}</ListItemContent>
        <ExpandMore />
      </ListItemButton>
    </ListItem>
  );
};

export function NavList() {
  return (
    <List
      sx={{
        '--ListItem-radius': '8px',
        '--List-gap': '4px',
        '--List-nestedInsetStart': '40px',
      }}
    >
      {foo.map((bar: NavListItemProps) => {
        return <NavListItem {...bar} />;
      })}

      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <i data-feather="flag" />
          </ListItemDecorator>
          <ListItemContent>Reporting</ListItemContent>
          <ExpandMore />
        </ListItemButton>
      </ListItem>
      <ListItem nested>
        <ListItemButton>
          <ListItemDecorator>
            <i data-feather="message-square" />
          </ListItemDecorator>
          <ListItemContent>Messages</ListItemContent>
          <i data-feather="chevron-up" />
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
