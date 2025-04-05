// import { createContext, useState } from 'react';

// export const AuthContext = createContext();

// // export const useAuthContext = () => {
// //   const context = useContext(AuthContext);
// //   return context;
// // };

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(
//     JSON.parse(localStorage.getItem('chat-user')) || null
//   );

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
