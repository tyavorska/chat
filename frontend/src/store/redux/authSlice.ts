import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthUser {
  fullName: string;
  profilePic: string;
  username: string;
  _id: string;
}

interface AuthState {
  authUser: AuthUser | null;
}

const initialState: AuthState = {
  authUser: JSON.parse(sessionStorage.getItem('authUser') || 'null'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.authUser = action.payload;
      sessionStorage.setItem('authUser', JSON.stringify(action.payload));
    },
    clearAuthUser: (state) => {
      state.authUser = null;
      sessionStorage.removeItem('authUser');
    },
  },
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;
export default authSlice.reducer;
