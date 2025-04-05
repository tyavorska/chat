import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export interface Token {
  fullName: string;
  profilePic: string;
  username: string;
  _id: string;
}

const useAuthStore = create(
  devtools(
    persist(
      (set, get) => ({
        authUser: null,
        setAuthUser: (user: Token) => set({ authUser: user || null }),
        clearAuthUser: () => set({ authUser: null }),
      }),
      {
        name: 'chat-storage',
        getStorage: () => sessionStorage,
        partialize: (state: { authUser: Token | null }) => ({
          token: state.authUser,
        }),
      }
    )
  )
);

export default useAuthStore;
