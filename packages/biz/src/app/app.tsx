// import { Sidebar, Nav } from 'components';
// import Home from './home';
import Flow from './flow';
import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { Header, NavList } from 'components';
import { Box, Button, Card, Container, Sheet } from '@mui/joy';
import { Home } from '@mui/icons-material';

export function App() {
  return (
    <Layout orientation="vertical">
      <Header
        title="hello"
        subtitle="Things can go here"
        action={<Button>cool</Button>}
      />
      <Card>alkjfaldskfjalfjslfkja</Card>
    </Layout>
  );
}

interface LayoutProps {
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  size?: number;
}

export function Layout(
  { children, orientation = 'vertical', size }: LayoutProps,
) {
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
        <NavList
          links={[
            { title: 'Home', icon: <Home /> },
            { title: 'Products', icon: <Home /> },
            { title: 'Scores', icon: <Home /> },
          ]}
          {...{ orientation }}
        />
      </Sheet>
      <Box component="main">
        <Container>{children}</Container>

        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          {/* <Nav /> */}
          {/* <Sidebar /> */}
          <Box component="main" className="MainContent" flex={1}>
            {/* <Home /> */}
            <Flow />

            <Routes>
              <Route path="/" element={<div>home</div>} />
              <Route path="/foo" element={<div>foo</div>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
