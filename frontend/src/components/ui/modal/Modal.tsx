import React from 'react';
import { createPortal } from 'react-dom';
import { ModalOptions } from './types/modal.types';

const Modal: React.FC<ModalOptions & { data: any; onClose: () => void }> = ({
  data,
  title,
  content,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  onClose,
}) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{content}</div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel ?? onClose}
            className="px-4 py-2 border rounded-lg text-gray-600"
          >
            {cancelText}
          </button>
          {onConfirm && (
            <button
              onClick={() => {
                onConfirm(data);
                onClose();
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
