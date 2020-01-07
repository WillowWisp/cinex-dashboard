import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageLogin from './layout/pages/PageLogin/PageLogin';
import PageClusters from './layout/pages/PageClusters/PageClusters';
import PageGenres from './layout/pages/PageGenres/PageGenres';
import PageMovies from './layout/pages/PageMovies/PageMovies';
import PageRates from './layout/pages/PageRates/PageRates';
import PageRooms from './layout/pages/PageRoom/PageRoom';
import PageScreenTypes from './layout/pages/PageScreenTypes/PageScreenTypes';
import PageShowtimes from './layout/pages/PageShowtimes/PageShowtimes';
import PageDiscounts from './layout/pages/PageDiscounts/PageDiscounts';
import PageReport from './layout/pages/PageReport/PageReport';
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
    path: '/clusters',
    component: <PageClusters />,
    requiredRoles: ['admin'],
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
    path: '/discounts',
    component: <PageDiscounts />,
    requiredRoles: ['admin'],
  },
  {
    path: '/report',
    component: <PageReport />,
    requiredRoles: ['admin'],
  },
  {
    path: '/test',
    component: <PageTest />,
    requiredRoles: ['admin'],
  },
];