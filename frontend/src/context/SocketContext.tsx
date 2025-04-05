import React, { createContext, useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import useAuthStore from '../store/zustand/useAuthStore';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux';

const SocketContext = createContext({ socket: null, onlineUsers: [] });

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  // const { authUser } = useAuthStore();
  const authUser = useSelector((state: RootState) => state.auth.authUser);

  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
