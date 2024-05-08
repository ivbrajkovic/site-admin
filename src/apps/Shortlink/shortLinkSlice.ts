import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

export type ModalType = 'create' | 'edit' | null;

type ShortLinkState = {
  modal: ModalType | null;
  shortLinkId: number | null;
};

const initialState: ShortLinkState = {
  modal: null,
  shortLinkId: null,
};

const shortLinkSlice = createSlice({
  name: 'shortLink',
  initialState,
  reducers: {
    openCreateModal: (state) => {
      state.modal = 'create';
      state.shortLinkId = null;
    },
    openEditModal: (state, { payload }: PayloadAction<number>) => {
      state.modal = 'edit';
      state.shortLinkId = payload;
    },
    closeModal: (state) => {
      state.modal = null;
      state.shortLinkId = null;
    },
  },
});

export const shortLinkSliceReducer = shortLinkSlice.reducer;

export const { openCreateModal, openEditModal, closeModal } =
  shortLinkSlice.actions;

export const selectModal = (state: RootState) => state.shortLink.modal;
export const selectShortLinkId = (state: RootState) =>
  state.shortLink.shortLinkId;
