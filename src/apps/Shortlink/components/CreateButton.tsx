import { Button } from '@mantine/core';

import { openModal } from 'components/Modal/modalSlice';
import { useAppDispatch } from 'store/hooks';

export const CreateButton = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(openModal({ name: 'create' }));
  return (
    <Button w="fit-content" onClick={handleClick}>
      Add Shortlink
    </Button>
  );
};
