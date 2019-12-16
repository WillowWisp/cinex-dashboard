import React from 'react';

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

import './App.css';

axios.defaults.baseURL = 'https://cinex.herokuapp.com';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
