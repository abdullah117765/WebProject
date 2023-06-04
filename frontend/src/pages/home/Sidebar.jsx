import React from 'react';
import SidebarItem from '../../components/sidebar/SidebarItem.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook,faPeopleGroup,faFolder } from '@fortawesome/free-solid-svg-icons';





const Sidebar = () => {
  return (
    <>
 {/* <div className="grid grid-cols-2 gap-4 "> */}
      <div className="  bg-gray-800 p-4 fixed left-0 h-full w-52">
       <div className='flex flex-col justify-center '> 
       <ul className='space-y-4' >
      <SidebarItem  name={"Home"}  symbol={<FontAwesomeIcon icon={faHouse} />}    />
      <SidebarItem  name={"Requirement"}  symbol={<FontAwesomeIcon icon={faBook} />}  submenu={["Display", "Manage"]}   />
      <SidebarItem  name={"TeamMember"}  symbol={<FontAwesomeIcon icon={faPeopleGroup} />}    />
      <SidebarItem  name={"Email"}  symbol={<FontAwesomeIcon icon={faFolder} />}    />
      {/* <h3>Your TeamMembers</h3> */}
      </ul>
       </div> 
      </div>   
      {/* sidebar part ends here */}

     
      
    {/* </div> */}
  
 
    </>
  );
};

export default Sidebar;
