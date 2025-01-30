import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
   <>
    <div>
      <header className="header">
        <h1>EventAround</h1>
        <nav className="nav-container">
          <Link to="/home" className="nav-button">Home</Link>
          <Link to="/event" className="nav-button">Events</Link>
          <Link to="/register" className="nav-button">Register</Link>
        </nav>
      </header>
      
      <Outlet />
    </div>
 
   </>
  );
};

export default MainLayout;
