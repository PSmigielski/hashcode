import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom';

import { UIProvider } from './context/UIContext';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <Router />
    </UIProvider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
  );