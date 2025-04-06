import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthStore from '../../../../store/zustand/useAuthStore';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../../../store/redux/authSlice';

interface EditAccountParams {
  email?: string;
  pass?: string;
}

const useEditAccount = () => {
  // const { setAuthUser } = useAuthStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const editAccount = async ({ email, pass }: EditAccountParams) => {
    if (!email || !pass) {
      toast.error('Please fill the fields');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/account/edit', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pass }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // setAuthUser(data);
      dispatch(setAuthUser(data));
      toast.success('Account updated successfully!');
    } catch (error: any) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, editAccount };
};

export default useEditAccount;
