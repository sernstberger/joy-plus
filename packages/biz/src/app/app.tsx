// // eslint-disable-next-line @typescript-eslint/no-unused-vars

// import styles from './app.module.css';

// export function App() {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
// import useScript from './useScript';
import { Sidebar } from 'components';
// import Header from './components/Header';
// import MyMessages from './components/MyMessages';

export default function JoyMessagesTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={(theme) => ({
          '[data-feather], .feather': {
            color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
            margin: 'var(--Icon-margin)',
            fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
            width: '1em',
            height: '1em',
          },
        })}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        {/* <Header /> */}
        <Sidebar />
        <Box component="main" className="MainContent" flex={1}>
          {/* <MyMessages /> */}
          yoooooooooo
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
