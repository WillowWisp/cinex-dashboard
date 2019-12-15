import React from 'react';

import classes from './PageDashboard.module.scss';

interface IPageDashboardProps {
  title?: string,
}

function PageDashboard(props: IPageDashboardProps) {
  return (
    <div className={classes['page-content']}>
      Hello {props.title}
    </div>
  );
}

export default PageDashboard;