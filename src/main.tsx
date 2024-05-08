import 'theme/styles.css';

import { Notifications } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from 'router/Router';
import { StoreProvider } from 'store/StoreProvider';
import { ThemeProvider } from 'theme/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <Notifications />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
