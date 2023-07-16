import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/public-sans';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

import App from './app/app';
import { CssBaseline } from '@mui/joy';

const githubTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // nothing
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'md' &&
            {
              // nothing
            }),
        }),
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CssVarsProvider theme={githubTheme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
