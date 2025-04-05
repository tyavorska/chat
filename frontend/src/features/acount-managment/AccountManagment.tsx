import React from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { useModal } from '../../components/ui/modal/hooks/useModal';
import Dropdown, { Option } from '../../components/ui/dropdown/Dropdown';
import EditAccountModal from './edit-account/modals/EditAccountModal';
import useLogout from './loguot/hooks/useLogout';
import useEditAccount from './edit-account/hooks/useEditAccount';

const AccountManagementButton = () => {
  const { openModal } = useModal();
  const { logout } = useLogout();
  const { editAccount } = useEditAccount();

  const options: Option[] = [
    {
      id: 'edit-account',
      icon: <BiUser className="w-4 h-4" />,
      label: 'Edit Account',
      action: () =>
        openModal({
          title: 'Edit Account',
          content: <EditAccountModal />,
          confirmText: 'Save',
          cancelText: 'Cancel',
          onConfirm: (data: any) => editAccount(data),
        }),
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
