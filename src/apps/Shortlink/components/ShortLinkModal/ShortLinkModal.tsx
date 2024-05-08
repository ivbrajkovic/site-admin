import { Modal } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { useShortLinkModal } from 'apps/Shortlink/components/ShortLinkModal/useShortLinkModal';
import { ModalType } from 'apps/Shortlink/shortLinkSlice';

type ShortLinkModalProps = PropsWithChildren<{
  modal: ModalType;
  title: string;
}>;

export const ShortLinkModal = (props: ShortLinkModalProps) => {
  const { isOpen, closeModal } = useShortLinkModal(props.modal);
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
