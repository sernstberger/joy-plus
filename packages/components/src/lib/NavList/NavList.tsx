import React from 'react';
import List, { ListProps } from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { ExpandLess, ExpandMore, Home } from '@mui/icons-material';

export interface NavListItemProps {
  title: string;
  children?: Omit<NavListItemProps[], 'children'>;
}

const NavListItem = ({ children, title }: NavListItemProps) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = children && children.length > 0;
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
    </ListItem>
  );
};

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
