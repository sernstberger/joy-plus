import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { Sidebar, Nav } from 'components';
import Home from './home';
import Flow from './flow';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />

      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Nav />
        <Sidebar />
        <Box component="main" className="MainContent" flex={1}>
          {/* <Home /> */}
          <Flow />

          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/foo" element={<div>foo</div>} />
          </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
