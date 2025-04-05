import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthStore from '../store/zustand/useAuthStore';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/redux/authSlice';

export interface User {
  username: string;
  password: string;
}
const useLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const login = async (
    username: User['username'],
    password: User['password']
  ) => {
    // const { setAuthUser, authUser } = useAuthStore.getState();

    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      dispatch(setAuthUser(data));
      // setAuthUser(data);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors(
  username: User['username'],
  password: User['password']
) {
  if (!username || !password) {
    toast.error('Please fill in all fields');
    return false;
  }

  return true;
}
