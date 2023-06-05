import React from 'react';
import SidebarItem from '../../components/sidebar/SidebarItem.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook,faPeopleGroup,faFolder, faFileLines, faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Sidebar = () => {
  return (
    

      <div className="  bg-gray-800 p-4  left-0 h-screen w-52">
       <div className='flex flex-col justify-center '> 
       <ul className='space-y-4' >
      <SidebarItem path={"/"} name={"Home"}  symbol={<FontAwesomeIcon icon={faHouse} />}    />
      <SidebarItem  name={"Requirement"}  symbol={<FontAwesomeIcon icon={faBook} />}  submenu={["   Display reqs", "Manage"]} submenupath={["/table", " /email"]} submenusymbol={[<FontAwesomeIcon icon={faFileLines} />, <FontAwesomeIcon icon={faFolder} />]}  />
      <SidebarItem path={"/team"} name={"TeamMember"}  symbol={<FontAwesomeIcon icon={faPeopleGroup} />}    />
      <SidebarItem  path={"/email"} name={"Email"}  symbol={<FontAwesomeIcon icon={faEnvelope} />}    />
      {/* <h3>Your TeamMembers</h3> */}
      </ul>
       </div> 
      </div>   
     
  
 
    
  );
};

export default Sidebar;
