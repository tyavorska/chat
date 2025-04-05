import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConversationState {
  selectedConversation: string | null;
  messages: string[];
}

const initialState: ConversationState = {
  selectedConversation: null,
  messages: [],
};

const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setSelectedConversation: (state, action: PayloadAction<string | null>) => {
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action: PayloadAction<string[]>) => {
      state.messages = action.payload;
    },
    clearConversation: (state) => {
      state.selectedConversation = null;
      state.messages = [];
    },
  },
});

export const { setSelectedConversation, setMessages, clearConversation } =
  conversationSlice.actions;

export default conversationSlice.reducer;
