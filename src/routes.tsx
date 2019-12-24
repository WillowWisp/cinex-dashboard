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
    component: <PageDashboard />,
    requiredRoles: [],
  },
  {
    path: '/login',
    component: <PageLogin />,
    requiredRoles: [],
  },
  {
    path: '/genres',
    component: <PageGenres />,
    requiredRoles: ['admin'],
  },
  {
    path: '/movies',
    component: <PageMovies />,
    requiredRoles: ['admin'],
  },
  {
    path: '/rates',
    component: <PageRates />,
    requiredRoles: ['admin'],
  },
  {
    path: '/rooms',
    component: <PageRooms />,
    requiredRoles: ['admin'],
  },
  {
    path: '/screen-types',
    component: <PageScreenTypes />,
    requiredRoles: ['admin'],
  },
  {
    path: '/showtimes',
    component: <PageShowtimes />,
    requiredRoles: ['admin'],
  },
  {
    path: '/test',
    component: <PageTest />,
    requiredRoles: ['admin'],
  },
];