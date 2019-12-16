import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageGenres from './layout/pages/PageGenres/PageGenres';
import PageTest from './layout/pages/PageTest/PageTest';

export const routes = [
  {
    path: '/',
    component: <PageDashboard title="bitches" />
  },
  {
    path: '/genres',
    component: <PageGenres />
  },
  {
    path: '/test',
    component: <PageTest />
  },
];