import { useState } from 'react';

import { route } from 'router/route';

export const useAppLinks = () => {
  // TODO: Fetch links permissions from the server
  const [links, _setLinks] = useState(() => [
    { label: 'Shortlink', to: route.shortlink },
    { label: 'Shortlink', to: route.shortlink },
    { label: 'Shortlink', to: route.shortlink },
    { label: 'Shortlink', to: route.shortlink },
  ]);

  return { links };
};
