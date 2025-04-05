import { ReactNode } from 'react';

export interface ModalOptions {
  title: string;
  content: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (data?: any) => void;
  onCancel?: () => void;
}

export interface ModalContextType {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
  setData: (data: any) => void;
}
