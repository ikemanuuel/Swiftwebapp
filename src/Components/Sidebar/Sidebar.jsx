import React, { useState } from 'react';
import {
  BsHouseFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { TbReport } from 'react-icons/tb';
import { FaBars, FaSignOutAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    window.history.pushState(null, null, "/");
    console.log('test')
  }
  const menuItem = [
    {
      path: '/dash/',
      name: 'Dashboard',
      icon: <RxDashboard />,
    },
    {
      path: '/dash/household',
      name: 'Household',
      icon: <BsHouseFill />,
    },
    {
      path: '/dash/resident',
      name: 'Resident',
      icon: <BsFillPersonFill />,
    },
    {
      path: '/dash/report',
      name: 'Report',
      icon: <TbReport />,
    },
    {
      path: '/dash/map',
      name: 'Map',
      icon: <FaMapMarkedAlt />,
    },
    {
      path: '/dash/profile',
      name: 'Profile',
      icon: <CgProfile />,
    },
    {
      path: '/',
      name: 'Logout',
      icon: <FaSignOutAlt />,
    },
  ];
  return (
    <div className="sidecontainer">
      <div
        style={{ width: isOpen ? '180px' : '45px', position: 'fixed', height: '100%', top: 0, left: 0 }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">BIMS</h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active" onClick={() => {
            if (item.name === "Logout") {
              handleLogout();
            }
          }}>
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? '200px' : '50px' }}>{children}</main>
    </div>
  );
};

export default Sidebar;
