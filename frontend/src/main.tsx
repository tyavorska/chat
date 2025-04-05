import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import store from './store/redux/index.ts';
import { SocketContextProvider } from './context/SocketContext.jsx';
import { ModalProvider } from './components/ui/modal/context/ModalContext.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <Provider store={store}>
        <SocketContextProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </SocketContextProvider>
      </Provider>

      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
