import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/styles';
import themeConfig from './themeConfig'
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <ThemeProvider theme={themeConfig}>
    <CssBaseline />
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    >
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);