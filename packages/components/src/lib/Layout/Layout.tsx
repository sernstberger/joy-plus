import React from 'react';

import { Box, Container, Sheet } from '@mui/joy';
import { Home as HomeIcon } from '@mui/icons-material';
import { NavList } from '../NavList/NavList';
import { Logo } from '../Logo/Logo';

export interface LayoutProps {
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  size?: number;
}

export function Layout({
  children,
  orientation = 'vertical',
  size,
}: LayoutProps) {
  const horizontalOrientation = orientation === 'horizontal';
  const defaultSize = horizontalOrientation ? 60 : 200;
  const calculatedSize = size || defaultSize;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridAutoFlow: horizontalOrientation ? 'row' : 'column',
        gridTemplateColumns: horizontalOrientation
          ? undefined
          : `${calculatedSize}px 1fr`,
        gridTemplateRows: horizontalOrientation
          ? `${calculatedSize}px 1fr`
          : undefined,
      }}
    >
      <Sheet
        color="neutral"
        // color="primary"
        variant="plain"
        // variant="solid"
        // invertedColors

        sx={(theme) => ({
          display: horizontalOrientation ? 'flex' : 'block',
          flexDirection: horizontalOrientation ? 'row' : 'column',
          color: theme.breakpoints.up('md') ? 'primary' : 'neutral',
          // alignItems: 'center',
          // justifyContent: 'center',
          // background: `linear-gradient(-45deg, ${theme.vars.palette.primary[700]}, ${theme.vars.palette.primary[600]})`,
          // boxShadow: 'inset 0px 2px 2px rgba(255, 255, 255, 0.3)',
          // borderRadius: 'md',
          // fontWeight: 'lg', // short-hand syntax, same as `theme.fontWeight.lg`
          // '&:hover': {
          //   background: `${theme.vars.palette.primary[700]}`,
          //   boxShadow: 'inset 0px 0px 4px rgba(0, 0, 0, 0.3)',
          // },
        })}
      >
        <Logo />
        <NavList
          links={[
            { title: 'Home', icon: <HomeIcon /> },
            { title: 'Products', icon: <HomeIcon /> },
            { title: 'Scores', icon: <HomeIcon /> },
          ]}
          {...{ orientation }}
        />
        <div>Account selector</div>
      </Sheet>
      <Box
        component="main"
        padding={2}
        sx={{
          overflowY: 'auto',
          height: horizontalOrientation ? undefined : '100vh',
        }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
