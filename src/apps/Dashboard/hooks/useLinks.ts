import { useState } from 'react';

import { route } from 'router/route';

export const useLinks = () => {
  // TODO: Fetch links and permissions from the server
  const [links, _setLinks] = useState(() => [
    { label: 'Shortlink', to: route.shortlink },
    { label: 'Some App', to: route.root },
    { label: 'Another App', to: route.root },
    { label: 'Yet Another App', to: route.root },
  ]);

  return { links };
};
