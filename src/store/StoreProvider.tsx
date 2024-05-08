import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/store';

export const StoreProvider = (props: PropsWithChildren) => (
  <Provider store={store}>{props.children}</Provider>
);
