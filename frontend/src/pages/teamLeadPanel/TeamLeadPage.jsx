import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';


const TeamLeadPage = () => {
  const menus = [
    {
      title: 'Menu 1',
      submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3']
    },
    {
      title: 'Menu 2',
      submenus: ['Submenu 4', 'Submenu 5', 'Submenu 6']
    },
    {
      title: 'Menu 3',
      submenus: ['Submenu 7', 'Submenu 8', 'Submenu 9']
    }
  ];

  return (
    <div>
      <Sidebar menus={menus} />
    </div>
  );
};



export default TeamLeadPage;
