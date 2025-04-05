import { create } from 'zustand';

const useConversation = create((set) => ({
  clearToken: () => set({ token: null }),
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
