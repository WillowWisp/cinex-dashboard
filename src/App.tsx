import React, { useState } from 'react';

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/auth';
import Layout from './layout/Layout';

import './App.css';
import './styles/global.scss';

axios.defaults.baseURL = 'https://cinex.herokuapp.com';

const App: React.FC = () => {
  const [authTokens, setAuthTokens] = useState<string>('');
  
  const setTokens = (data: any) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens: authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
