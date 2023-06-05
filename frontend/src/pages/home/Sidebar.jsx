import React from 'react';
import SidebarItem from '../../components/sidebar/SidebarItem.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAdd,faPeopleGroup,faFolder, faFileLines, faEnvelope, faUserPlus,faUserGear,faListCheck, faQuestion} from '@fortawesome/free-solid-svg-icons';





const Sidebar = () => {
  return (
    

      <div className="  bg-gray-800 p-4  left-0 h-screen w-52">
       <div className='flex flex-col justify-center '> 
       <ul className='space-y-4' >
      <SidebarItem path={"/"} name={"Home"}  symbol={<FontAwesomeIcon icon={faHouse} />}    />
      <SidebarItem  name={"Requirement"}  symbol={<FontAwesomeIcon icon={faListCheck} />}  submenu={["Display reqs", "Add req"]} submenupath={["/table, /addreq"]} submenusymbol={[<FontAwesomeIcon icon={faFileLines} />,<FontAwesomeIcon icon={faAdd} /> ]}  />
      <SidebarItem  name={"TeamMember"}  symbol={<FontAwesomeIcon icon={faPeopleGroup} />}   submenu={[" Add Member", "Manage Members"]} submenupath={["/team", " /manageteam"]} submenusymbol={[<FontAwesomeIcon icon={faUserPlus} />, <FontAwesomeIcon icon={faUserGear} />]}  />
      <SidebarItem  path={"/email"} name={"Email"}  symbol={<FontAwesomeIcon icon={faEnvelope} />}    />
      <SidebarItem  path={"/evaluation"} name={"Evaluations"}  symbol={<FontAwesomeIcon icon={faQuestion} />}    />
      {/* <h3>Your TeamMembers</h3> */}
      </ul>
       </div> 
      </div>   
     
  
 
    
  );
};

export default Sidebar;
