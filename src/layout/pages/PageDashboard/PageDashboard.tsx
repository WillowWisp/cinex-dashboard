import React, { FunctionComponent } from 'react';

import classes from './PageDashboard.module.scss';

const PageDashboard: FunctionComponent = () => {
  return (
    <div className={classes['page-content']}>
      Hello bitches!
    </div>
  );
}

export default PageDashboard;