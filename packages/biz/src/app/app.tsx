import Flow from './flow';
import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { Header, Layout, NavList } from 'components';
import { Box, Button, Card, Container, Sheet } from '@mui/joy';
import { Home as HomeIcon } from '@mui/icons-material';
import Home from './home';

export function App() {
  return (
    <Layout orientation="horizontal">
      <Header
        title="hello"
        subtitle="Things can go here"
        action={<Button>cool</Button>}
      />

      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/foo" element={<div>foo</div>} />
      </Routes>

      {/* <Home /> */}
      <Flow />
    </Layout>
  );
}

interface LayoutProps {
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  size?: number;
}

export default App;
