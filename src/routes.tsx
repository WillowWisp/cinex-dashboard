import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageGenres from './layout/pages/PageGenres/PageGenres';
import PageMovies from './layout/pages/PageMovies/PageMovies';
import PageRates from './layout/pages/PageRates/PageRates';
import PageRooms from './layout/pages/PageRoom/PageRoom';
import PageScreenTypes from './layout/pages/PageScreenTypes/PageScreenTypes';
import PageTest from './layout/pages/PageTest/PageTest';

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
    path: '/movies',
    component: <PageMovies />
  },
  {
    path: '/rates',
    component: <PageRates />
  },
  {
    path: '/rooms',
    component: <PageRooms />
  },
  {
    path: '/screen-types',
    component: <PageScreenTypes />
  },
  {
    path: '/test',
    component: <PageTest />
  },
];