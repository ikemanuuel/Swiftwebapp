import React from 'react';
import { 
  FaHome, 
  FaClipboardList,
  FaGraduationCap, 
  FaFileInvoice, 
  FaFolder, 
  FaFolderPlus,
  FaFolderOpen,
  FaUserCircle } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/dashboard/home',
      name: 'Dashboard',
      icon: <FaHome />,
    },
    {
      path: '/dashboard/order',
      name: 'Order',
      icon: <FaClipboardList />,
    },
    {
      path: '/dashboard/rental',
      name: 'Rental',
      icon: <FaGraduationCap />,
    },
    {
      path: '/dashboard/reports',
      name: 'Reports',
      icon: <FaFileInvoice />,
    },
    {
      path: '/dashboard/categories',
      name: 'Categories',
      icon: <FaFolder />,
    },
    {
      path: '/dashboard/addcategories',
      name: 'Add_Categories',
      icon: <FaFolderPlus />,
    },
    {
      path: '/dashboard/item',
      name: 'Item',
      icon: <FaFolderOpen />,
    },
    {
      path: '/dashboard/profile',
      name: 'Profile',
      icon: <FaUserCircle />,
    },
    {
      path: '/',
      name: 'Logout',
      icon: <BiLogOut />,
    },
  ];
  
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Sidebar;