import React, { useState, useEffect } from 'react';

import * as authAPI from './api/authAPI';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import Layout from './layout/Layout';

import './App.css';
import './styles/global.scss';

axios.defaults.baseURL = 'https://cinex.herokuapp.com';

const App: React.FC = () => {
  const [authContext, setAuthContext] = useState({ roles: [] as Array<string>, username: '', token: '' });
  
  const setAuthContextFunc = (tokenStr: string) => {
    // TODO: Clean this up (maybe use redux instead of context)
    if (tokenStr) {
      const decoded = jwtDecode<any>(tokenStr);
      console.log(decoded);
      const newAuthContext = {
        roles: [...decoded.roles] as Array<string>,
        username: decoded.username as string,
        token: tokenStr as string,
      };
      localStorage.setItem('token', tokenStr);
      setAuthContext(newAuthContext);
    } else {
      localStorage.removeItem('token');
      setAuthContext({ roles: [] as Array<string>, username: '', token: '' });
    }
  }

  useEffect(() => {
    checkTokenLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkTokenLoggedIn = () => {
    const tokenStr = localStorage.getItem('token');
    console.log(tokenStr);
    if (tokenStr) {
      authAPI.checkToken(tokenStr)
        .then(response => {
          if (response.data === true) {
            setAuthContextFunc(tokenStr);
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch(err => {
          localStorage.removeItem('token');
        })
    } else {
      localStorage.removeItem('token');
    }
  }

  return (
    <AuthContext.Provider value={{ authContext: authContext, setAuthContext: setAuthContextFunc }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
