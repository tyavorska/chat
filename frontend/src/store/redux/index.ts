import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import conversationSlice from './conversationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    conversation: conversationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
