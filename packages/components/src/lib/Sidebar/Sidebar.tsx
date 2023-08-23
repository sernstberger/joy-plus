import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { NavList, UserMenu } from '../components';
// import MuiLogo from './MuiLogo';
// import ColorSchemeToggle from './ColorSchemeToggle';
// import { closeSidebar } from '../utils';

export function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: 'fixed',
          lg: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          lg: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        px: 1.5,
        py: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '224px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '256px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',

          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        // onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {/* <MuiLogo /> */}
        <Typography fontWeight="xl">MUI</Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavList
          links={[
            {
              title: 'Home',
            },
            {
              title: 'Quote',
              children: [
                {
                  title: 'Foo',
                },
                {
                  title: 'Resources',
                },
                {
                  title: 'Reports',
                },
              ],
            },
            {
              title: 'Resources',
            },
            {
              title: 'Reports',
            },
          ]}
        />

        <List
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': '8px',
            '--List-gap': '8px',
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="life-buoy" />
              </ListItemDecorator>
              <ListItemContent>Supports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />

      <UserMenu />
    </Sheet>
  );
}

export default Sidebar;
