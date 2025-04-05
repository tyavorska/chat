import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthStore from '../../../../store/zustand/useAuthStore';
import { clearAuthUser } from '../../../../store/redux/authSlice';
import { useDispatch } from 'react-redux';

const useLogout = () => {
  // const { setAuthUser } = useAuthStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      dispatch(clearAuthUser());
      // setAuthUser(null);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
