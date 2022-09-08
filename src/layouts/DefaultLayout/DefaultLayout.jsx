import React, { Fragment } from 'react';
import Header from '../Header/Header.layout';

import './defaultLayout.scss';

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="header">
        <Header />
        <div className="body">{children}</div>
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
