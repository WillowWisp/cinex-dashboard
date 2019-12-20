import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageGenres from './layout/pages/PageGenres/PageGenres';
import PageScreenTypes from './layout/pages/PageScreenTypes/PageScreenTypes';
import PageTest from './layout/pages/PageTest/PageTest';
import PageRates from './layout/pages/PageRates/PageRates';

export const routes = [
  {
    path: '/',
    component: <PageDashboard />
  },
  {
    path: '/genres',
    component: <PageGenres />
  },
  {
    path: '/screen-types',
    component: <PageScreenTypes />
  },
  {
    path: '/rates',
    component: <PageRates />
  },
  {
    path: '/test',
    component: <PageTest />
  },
];