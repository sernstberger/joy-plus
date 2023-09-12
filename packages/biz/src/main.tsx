import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/inter';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import store from './app/store';
import { Provider } from 'react-redux';

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

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
  fontFamily: {
    body: 'Inter, sans-serif',
    display: 'Inter, sans-serif',
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
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
  document.getElementById('root') as HTMLElement,
);

const materialTheme = materialExtendTheme();

root.render(
  <StrictMode>
    <Provider store={store}>
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <CssVarsProvider theme={githubTheme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CssVarsProvider>
      </MaterialCssVarsProvider>
    </Provider>
  </StrictMode>,
);
