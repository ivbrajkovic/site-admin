import { createSelector } from '@reduxjs/toolkit';

import { useCloseModal } from 'components/Modal/hooks/useCloseModal';
import { ModalType } from 'components/Modal/modalSlice';
import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';

const selectIsOpen = createSelector(
  (state: RootState, modal: ModalType) => Boolean(state.modal.name === modal),
  Boolean,
);

const selectPayloadIfOpen = createSelector(
  (state: RootState, isOpen: boolean) => (isOpen ? state.modal.payload : null),
  (payload) => payload,
);

export const useModal = (modal: ModalType) => {
  const { closeModal } = useCloseModal();
  const isOpen = useAppSelector((state) => selectIsOpen(state, modal));
  const payload = useAppSelector((state) => selectPayloadIfOpen(state, isOpen));
  return { isOpen, closeModal, payload };
};
