import { createSelector } from '@reduxjs/toolkit';

import { ModalType } from 'apps/Shortlink/shortLinkSlice';
import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';

const selectIsOpen = createSelector(
  (state: RootState, modal: ModalType) =>
    Boolean(state.shortLink.modal === modal),
  Boolean,
);

export const useIsOpenModal = (modal: ModalType) => ({
  isOpen: useAppSelector((state) => selectIsOpen(state, modal)),
});
