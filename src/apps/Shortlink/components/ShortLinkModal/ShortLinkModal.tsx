import { Modal } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { useCloseModal } from 'apps/Shortlink/components/ShortLinkModal/hooks/useCloseModal';
import { useIsOpenModal } from 'apps/Shortlink/components/ShortLinkModal/hooks/useIsOpenModal';
import { ModalType } from 'apps/Shortlink/shortLinkSlice';

type ShortLinkModalProps = PropsWithChildren<{
  modal: ModalType;
  title: string;
}>;

export const ShortLinkModal = (props: ShortLinkModalProps) => {
  const { isOpen } = useIsOpenModal(props.modal);
  const { closeModal } = useCloseModal();
  return (
    <Modal
      centered
      withinPortal
      opened={isOpen}
      title={props.title}
      onClose={closeModal}
    >
      {props.children}
    </Modal>
  );
};
