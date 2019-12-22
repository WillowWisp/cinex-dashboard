import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageLogin from './layout/pages/PageLogin/PageLogin';
import PageGenres from './layout/pages/PageGenres/PageGenres';
import PageMovies from './layout/pages/PageMovies/PageMovies';
import PageRates from './layout/pages/PageRates/PageRates';
import PageRooms from './layout/pages/PageRoom/PageRoom';
import PageScreenTypes from './layout/pages/PageScreenTypes/PageScreenTypes';
import PageShowtimes from './layout/pages/PageShowtimes/PageShowtimes';
import PageTest from './layout/pages/PageTest/PageTest';

export const routes = [
  {
    path: '/',
    component: <PageDashboard />
  },
  {
    path: '/login',
    component: <PageLogin />
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
    path: '/showtimes',
    component: <PageShowtimes />
  },
  {
    path: '/test',
    component: <PageTest />
  },
];