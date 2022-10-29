import React from 'react';
import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '80%',
        backgroundColor: 'rgb(246,246,239)',
      }}>
      <Navbar />
      <Outlet />
    </div>
  );
}
