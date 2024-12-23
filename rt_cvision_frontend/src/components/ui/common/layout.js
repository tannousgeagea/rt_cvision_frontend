import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='layout-conatiner'>
      <div className="layout">
        <div className='layout-navbar'>
          <Navbar />
        </div>

        <div className="layout-main">
          <div className='layout-header'>
          </div>
          
          <div className='layout-content'>
            <Outlet />
          </div>
        </div>
      </div>

      <div className='layout-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;