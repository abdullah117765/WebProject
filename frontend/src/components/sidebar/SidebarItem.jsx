import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const SidebarItem= (Props)=>{

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);


    return (
        <>
        <li className=" text-white hover:bg-gray-700"   onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} >
        <span className="p-3"> {Props.symbol}</span>
        {Props.name}
        {Props.submenu? (<FontAwesomeIcon className="mx-2"  icon={faCaretDown} />): ""}

     </li>
     
     {Props.submenu ? (
         
     isSubmenuOpen && (<ul className="ml-4 mt-2 ">
       {Props.submenu.map(( item) => (
         <li className="py-1  text-white hover:bg-gray-700 ">{item}</li>
       ))}
     </ul>)

     ) : " "}
     </>
    );
   
}



export default SidebarItem;