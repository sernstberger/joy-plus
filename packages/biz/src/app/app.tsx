import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import { Sidebar, Nav } from 'components';
import Home from './home';
import Flow from './flow';

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
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
