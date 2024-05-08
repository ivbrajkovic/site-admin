import { createSelector } from '@reduxjs/toolkit';

import { ModalType, closeModal } from 'apps/Shortlink/shortLinkSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';

const selectIsOpen = createSelector(
  (state: RootState, modal: ModalType) =>
    Boolean(state.shortLink.modal === modal),
  Boolean,
);

export const useShortLinkModal = (modal: ModalType) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => selectIsOpen(state, modal));
  const handleCloseModal = () => dispatch(closeModal());
  return { isOpen, closeModal: handleCloseModal };
};
