import React, { useEffect } from 'react';
import { TiMessages } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux';
import useAuthStore from '../../store/zustand/useAuthStore';
import useConversation from '../../store/zustand/useConversation';
import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col chat-background">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 side-bar-chat">
            <span className="label-text text-gray-500">To:</span>{' '}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  // const { authUser } = useAuthStore();
  const authUser = useSelector((state: RootState) => state.auth.authUser);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
