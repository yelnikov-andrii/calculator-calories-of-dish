import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false,
}

const productSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    }
  }
})

export const { openModal, closeModal } = productSlice.actions;
export default productSlice.reducer;