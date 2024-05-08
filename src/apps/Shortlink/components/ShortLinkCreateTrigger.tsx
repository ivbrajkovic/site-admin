import { Button } from '@mantine/core';

import { openCreateModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch } from 'store/hooks';

export const ShortLinkCreateTrigger = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(openCreateModal());
  return (
    <Button w="fit-content" onClick={handleClick}>
      Add Shortlink
    </Button>
  );
};
