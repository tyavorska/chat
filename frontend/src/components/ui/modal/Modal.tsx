import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../store/redux/modalSlice';
import { RootState } from '../../../store/redux';
import components, { ComponentsModal } from '.';

const Modal = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);

  console.log(isOpen);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <ModalTitle />
        <ModalContent />
        <ModalActions />
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;

const ModalTitle = () => {
  const { title } = useSelector((state: RootState) => state.modal);

  if (!title) return null;

  return <h3 className="text-xl mb-4">{title}</h3>;
};

const ModalContent = () => {
  const { content } = useSelector((state: RootState) => state.modal);

  const ComponentToRender = components[content as keyof ComponentsModal];
  if (!content || !ComponentToRender) return null;

  return (
    <div className="mb-4">
      <ComponentToRender />
    </div>
  );
};

const ModalActions = () => {
  const dispatch = useDispatch();
  const {
    isControlled,
    confirmText,
    cancelText,
    confirmHandler,
    cancelHandler,
  } = useSelector((state: RootState) => state.modal);

  const handleCancel = () => cancelHandler ?? dispatch(closeModal());
  const handleConfirm = () => confirmHandler ?? dispatch(closeModal());

  if (isControlled) return null;

  return (
    <div className="flex justify-between">
      <button
        onClick={handleCancel}
        className="px-4 py-2 bg-gray-500 text-white rounded-md"
      >
        {cancelText}
      </button>
      <button
        onClick={handleConfirm}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {confirmText}
      </button>
    </div>
  );
};
