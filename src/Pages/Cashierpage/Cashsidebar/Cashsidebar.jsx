import React from 'react';
import { 
  FaClipboardList,
  FaGraduationCap, 
  FaUserCircle } from 'react-icons/fa';
import { BiLogOut,} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './cashsidebar.css';

const Cashsidebar = ({ children }) => {
  const menuItem = [
    
    {
      path: '/cashdashboard/cashorder',
      name: 'Order',
      icon: <FaClipboardList />, 
    },
    {
      path: '/dashboard/rental',
      name: 'Rental',
      icon: <FaGraduationCap />,
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
    <div className="cashcontainer">
      <div className="cashsidebar">
        <div className="cashtop_section">
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

export default Cashsidebar;