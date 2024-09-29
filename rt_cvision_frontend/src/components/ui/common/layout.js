import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='layout-conatiner'>
      <div className="layout">
        <div className='layout-navbar'>
          <Navbar />
        </div>
        <div className="layout-content">
          {/* {children} */}
          <Outlet />
        </div>
      </div>

      <div className='layout-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;