import { Modal, Text } from '@mantine/core';

import { closeModal, selectModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const ShortLinkCreateModal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectModal);

  const handleCloseModal = () => dispatch(closeModal());
  const isOpen = modal === 'create';

  return (
    <Modal opened={isOpen} onClose={handleCloseModal}>
      <Text>Modal #1</Text>
      <Text>Content #1</Text>
    </Modal>
  );
};
