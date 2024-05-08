import 'main.css';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from 'router/Router';
import { StoreProvider } from 'store/StoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </React.StrictMode>,
);
