import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const SidebarItem= (Props)=>{

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);


    return (
        <>
        <li className=" text-white hover:bg-gray-700"   onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} >
        <span className="p-3"> {Props.symbol}</span>
        <a href={Props.path}>{Props.name}</a>
        {Props.submenu? (<FontAwesomeIcon className="mx-2"  icon={faCaretDown} />): ""}

     </li>
     
     {Props.submenu ? (
         
     isSubmenuOpen && (<ul className="ml-4 mt-2 ">
       {Props.submenu.map(( item,index) => (
         <li key={index} className="py-1  text-white hover:bg-gray-700 "><a href={Props.submenupath[index]}>{Props.submenusymbol[index]}  {item}</a></li>
       ))}
     </ul>)

     ) : " "}
     </>
    );
   
}



export default SidebarItem;



