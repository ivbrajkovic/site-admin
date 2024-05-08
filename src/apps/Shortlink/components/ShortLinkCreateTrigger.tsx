import { Button } from 'semantic-ui-react';

import { openCreateModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch } from 'store/hooks';

export const ShortLinkCreateTrigger = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(openCreateModal());
  return (
    <Button primary onClick={handleClick}>
      Add Shortlink
    </Button>
  );
};
