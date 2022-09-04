import React from 'react';
import Header from '../Header/Header.layout';
import './defaultLayout.scss';

const DefaultLayout = ({ children }) => {
  console.log('DefaultLayout');
  return (
    <div className="header">
      <Header />
      <div className="body">{children}</div>
    </div>
  );
};

export default DefaultLayout;
