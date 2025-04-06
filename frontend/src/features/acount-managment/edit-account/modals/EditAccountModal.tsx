import React, { useState } from 'react';
import Input from '../../../../components/ui/input/Input';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/redux';

const EditAccountModal: React.FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.authUser);
  const [username, setEmail] = useState(authUser?.username ?? '');
  const [pass, setPass] = useState('');

  const onEmailChangeHandler = (value: any) => {
    setEmail(value);
  };

  const onPasswordChangeHandler = (value: any) => {
    setPass(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        label="Username"
        value={username}
        onChange={onEmailChangeHandler}
      />
      <Input label="Password" value={pass} onChange={onPasswordChangeHandler} />
    </form>
  );
};

export default EditAccountModal;
