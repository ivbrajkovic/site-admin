import 'theme/styles.css';

import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { modals } from 'apps/Shortlink/modals';
import { Router } from 'router/Router';
import { StoreProvider } from 'store/StoreProvider';
import { ThemeProvider } from 'theme/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <ModalsProvider modals={modals}>
          <Notifications />
          <Router />
        </ModalsProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
