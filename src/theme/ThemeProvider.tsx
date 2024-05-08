import { createTheme, MantineProvider } from '@mantine/core';
import { PropsWithChildren } from 'react';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const ThemeProvider = (props: PropsWithChildren) => (
  <MantineProvider theme={theme} defaultColorScheme="light">
    {props.children}
  </MantineProvider>
);
