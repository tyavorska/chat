import React, { useState } from 'react';
import Input from '../../../../components/ui/input/Input';
import { useModal } from '../../../../components/ui/modal/hooks/useModal';

const EditAccountModal: React.FC = () => {
  const { setData } = useModal();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onEmailChangeHandler = (value: any) => {
    setEmail(value);
    setData((prev: any) => {
      return { ...prev, email: value };
    });
  };

  const onPasswordChangeHandler = (value: any) => {
    setPass(value);
    setData((prev: any) => {
      return { ...prev, pass: value };
    });
  };

  return (
    <form>
      <Input label="Email" value={email} onChange={onEmailChangeHandler} />
      <Input label="Password" value={pass} onChange={onPasswordChangeHandler} />
    </form>
  );
};

export default EditAccountModal;
