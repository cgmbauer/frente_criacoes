import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
