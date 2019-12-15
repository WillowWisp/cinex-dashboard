import React from 'react';

import PageDashboard from './layout/pages/PageDashboard/PageDashboard';
import PageTest from './layout/pages/PageTest/PageTest';

export const routes = [
  {
    path: '/',
    component: <PageDashboard title="bitches" />
  },
  {
    path: '/test',
    component: <PageTest />
  },
];