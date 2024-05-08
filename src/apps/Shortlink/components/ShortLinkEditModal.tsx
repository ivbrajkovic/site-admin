import { Modal } from '@mantine/core';

import {
  closeModal,
  selectModal,
  selectShortLinkId,
} from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const ShortLinkEditModal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectModal);
  const shortLinkId = useAppSelector(selectShortLinkId);

  const handleCloseModal = () => dispatch(closeModal());
  const isOpen = modal === 'edit';

  return (
    <Modal title="Edit Shortlink " opened={isOpen} onClose={handleCloseModal}>
      Modal #1
      <div>ShortlinkId {shortLinkId}</div>
    </Modal>
  );
};
