import { Modal, ModalContent, ModalHeader } from 'semantic-ui-react';

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
    <Modal open={isOpen} onClose={handleCloseModal}>
      <ModalHeader>Modal #1</ModalHeader>
      <ModalContent>ShortlinkId {shortLinkId}</ModalContent>
    </Modal>
  );
};
