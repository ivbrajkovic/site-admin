import {
  Modal as MantineModal,
  type ModalProps as MantineModalProps,
} from '@mantine/core';
import { Children, ReactElement, cloneElement, isValidElement } from 'react';

import { useModal } from 'components/Modal/hooks/useModal';
import { ModalType } from 'components/Modal/modalSlice';

type InjectedProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

type ModalProps = Omit<MantineModalProps, 'opened' | 'onClose'> & {
  name: ModalType;
  title: string;
  children: ReactElement<InjectedProps>[] | ReactElement<InjectedProps>;
};

export const Modal = (props: ModalProps) => {
  const { isOpen, closeModal, payload } = useModal(props.name);
  console.log({ isOpen, closeModal, payload });

  return (
    <MantineModal
      {...props}
      centered
      withinPortal
      opened={isOpen}
      title={props.title}
      onClose={closeModal}
    >
      {Children.map(props.children, (child) =>
        isValidElement(child) ? cloneElement(child, { ...payload }) : child,
      )}
    </MantineModal>
  );
};
