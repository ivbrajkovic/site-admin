import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store/store';

export type ModalType = 'create' | 'edit' | null;

type ModalState = {
  name: ModalType | null;
  payload?: unknown;
};

const initialState: ModalState = {
  name: null,
  payload: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<ModalState>) => {
      state.name = payload.name;
      state.payload = payload.payload;
    },
    closeModal: (state) => {
      state.name = null;
      state.payload = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.name;
export const selectModalPayload = (state: RootState) => state.modal.payload;
