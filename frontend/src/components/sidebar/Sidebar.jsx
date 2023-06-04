import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook,faPeopleGroup,faFolder } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {Data_Sidebar} from  "./Data_Sidebar.js"


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     
        <div className='navbar flex items-center bg-blue-500'>
          <Link to='#' className='menu-bars p-4'>
            <faBook onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <faBook />
              </Link>
            </li>
            {Data_Sidebar.map((item, index) => {
              if (item.subMenu) {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className="flex items-center py-2 px-4">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                    <ul className='sub-menu-items'>
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className={subItem.cName}>
                          <Link to={subItem.path} className="flex items-center py-2 px-4">
                            {subItem.icon}
                            <span className="ml-2">{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className="flex items-center py-2 px-4">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
     
    </>
  );
}

export default Sidebar;
