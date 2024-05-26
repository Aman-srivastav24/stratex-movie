// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';


const Layout = () => (
  <div>
    <Header />
    <Outlet />
   
  </div>
);

export default Layout;