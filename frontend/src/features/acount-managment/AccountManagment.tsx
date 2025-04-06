import React from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/redux/modalSlice';
import Dropdown, { Option } from '../../components/ui/dropdown/Dropdown';
import EditAccountModal from './edit-account/modals/EditAccountModal';
import useLogout from './loguot/hooks/useLogout';

export const EDIT_ACCOUNT_MODAL_KEY = 'edit-account';
const AccountManagementButton = () => {
  const { logout } = useLogout();

  const dispatch = useDispatch();

  const openEditAccountModal = () => {
    dispatch(
      openModal({
        title: 'Edit Account',
        content: EDIT_ACCOUNT_MODAL_KEY,
        // isControlled: true,
      })
    );
  };

  const options: Option[] = [
    {
      id: 'edit-account',
      icon: <BiUser className="w-4 h-4" />,
      label: 'Edit Account',
      action: openEditAccountModal,
    },
    {
      id: 'logout',
      icon: <BiLogOut className="w-4 h-4" />,
      label: 'Logout',
      action: () => logout(),
    },
  ];

  return (
    <div className="">
      <Dropdown
        options={options}
        placeholder={<BiUser className="w-4 h-4" />}
      />
    </div>
  );
};

export default AccountManagementButton;
