import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import './i18n';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import 'index.css';

const history = createBrowserHistory();

// customize default Material-UI theme
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff9840',
      main: '#FF7F11',
      dark: '#b2580b',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'Source Sans Pro',
    },
    fontFamily: [
      'Nanum Gothic',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Lodading</div>}>
        <App />
        <CssBaseline />
      </Suspense>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
