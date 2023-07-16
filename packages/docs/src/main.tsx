import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/public-sans';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';

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

const materialTheme = materialExtendTheme();

root.render(
  <StrictMode>
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <CssVarsProvider theme={githubTheme}>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </MaterialCssVarsProvider>
  </StrictMode>
);
