import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import "./index.css";
import { UIProvider } from './context/UIContext';
ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <Router />
    </UIProvider>
  </React.StrictMode>,
  document.getElementById('root')
  );