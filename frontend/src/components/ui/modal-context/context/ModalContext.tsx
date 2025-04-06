import React, { createContext, useState, ReactNode } from 'react';
import Modal from '../Modal';
import { ModalContextType, ModalOptions } from '../types/modal.types';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);
  const [data, setData] = useState<any | null>(null);

  const openModal = (options: ModalOptions) => setModalOptions(options);
  const closeModal = () => setModalOptions(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setData }}>
      {children}
      {modalOptions && (
        <Modal {...modalOptions} onClose={closeModal} data={data} />
      )}
    </ModalContext.Provider>
  );
};
