import { Modal, ModalContent, ModalHeader } from 'semantic-ui-react';

import { closeModal, selectModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const ShortLinkCreateModal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(selectModal);

  const handleCloseModal = () => dispatch(closeModal());
  const isOpen = modal === 'create';

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <ModalHeader>Modal #1</ModalHeader>
      <ModalContent>Content #1</ModalContent>
    </Modal>
  );
};
