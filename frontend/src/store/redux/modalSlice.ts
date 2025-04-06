import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  isControlled?: boolean;
  content: string;
  title: string;
  confirmText?: string;
  cancelText?: string;
  confirmHandler?: () => void;
  cancelHandler?: () => void;
}

const initialState: ModalState = {
  isOpen: false,
  isControlled: false,
  content: '',
  title: '',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmHandler: undefined,
  cancelHandler: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        isControlled?: ModalState['isControlled'];
        title: ModalState['title'];
        content: ModalState['content'];
        confirmText?: ModalState['confirmText'];
        cancelText?: ModalState['cancelText'];
        confirmHandler?: ModalState['confirmHandler'];
        cancelHandler?: ModalState['cancelHandler'];
      }>
    ) => {
      state.isOpen = true;
      state.isControlled = action.payload.isControlled;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.confirmText =
        action.payload.confirmText ?? initialState.confirmText;
      state.cancelText = action.payload.cancelText ?? initialState.cancelText;
      state.confirmHandler = action.payload.confirmHandler;
      state.cancelHandler = action.payload.cancelHandler;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isControlled = false;
      state.title = '';
      state.content = '';
      state.confirmText = initialState.confirmText;
      state.cancelText = initialState.cancelText;
      state.confirmHandler = undefined;
      state.cancelHandler = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
