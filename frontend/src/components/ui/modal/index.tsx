import React from 'react';
import EditAccountModal from '../../../features/acount-managment/edit-account/modals/EditAccountModal';
import { EDIT_ACCOUNT_MODAL_KEY } from '../../../features/acount-managment/AccountManagment';

export interface ComponentsModal {
  [EDIT_ACCOUNT_MODAL_KEY]: typeof EditAccountModal;
}

// This is a memoized version of the EditAccountModal,
// it will only re-render when the props change.
const components: ComponentsModal = {
  [EDIT_ACCOUNT_MODAL_KEY]: React.memo(() => <EditAccountModal />),
};

export default components;
