import React from 'react';

import { Box, Container, Sheet } from '@mui/joy';
import { Home as HomeIcon } from '@mui/icons-material';
import { NavList } from '../NavList/NavList';

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
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridAutoFlow: horizontalOrientation ? 'row' : 'column',
        gridTemplateColumns: horizontalOrientation
          ? undefined
          : `${defaultSize}px 1fr`,
        gridTemplateRows: horizontalOrientation
          ? `${defaultSize}px 1fr`
          : undefined,
      }}
    >
      <Sheet color="neutral" variant="plain">
        <div>Logo</div>
        <NavList
          links={[
            { title: 'Home', icon: <HomeIcon /> },
            { title: 'Products', icon: <HomeIcon /> },
            { title: 'Scores', icon: <HomeIcon /> },
          ]}
          {...{ orientation }}
        />
      </Sheet>
      <Box component="main" padding={2}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
