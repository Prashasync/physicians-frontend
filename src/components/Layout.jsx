// src/components/Layout.jsx
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../components/Layout.scss'; // optional

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        window.innerWidth <= 768
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarOpen]);

  return (
    <div className="dashboard-layout">
      <div ref={sidebarRef}>
        <Sidebar isOpen={sidebarOpen} />
      </div>

      {sidebarOpen && window.innerWidth <= 768 && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <Topbar toggleSidebar={toggleSidebar} hamburgerRef={hamburgerRef} />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
