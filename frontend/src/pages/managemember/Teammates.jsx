import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import person from "../../Resources/person2.jpeg"
import person1 from "../../Resources/person.jpeg"
// import person2 from "../../Resources/person.jpg"

const Teammates = () => {

  const [teammates, setTeammates] = useState([]);

  useEffect(() => {
    // Fetch teammates when the component mounts
    getTeammates();
  }, []);

  const getTeammates = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/teamMember/getMembers/${"Project1"}`); // this will we get from Usecontext for now it is hardcoded 
     // console.log(response)
      setTeammates(response.data);
    } catch (error) {
      console.error('Error fetching teammates:', error);
      toast.error('Error fetching teammate:', error);
    }
    
  };

  const deleteTeammate = async (student_id, projectId) => {
    try {
      await axios.delete(`http://localhost:3001/teamMember/deleteMember/${projectId}/${student_id}`);
      setTeammates(teammates.filter((teammate) => teammate.student_id !== student_id));
      toast.success('Successfully removed the Teammate');
    } catch (error) {
      console.error('Error deleting teammate:', error);
      toast.error('Error deleting teammate:', error);
    }
  };
  

 
  
    return (
        <div className='bg-zinc-200 h-full'>
     

      <div className="container w-full h-16 pt-7 bg-zinc-100">
        <h1 className='ml-4 text-2xl mb-3 text-blue-300'>Teammates Manage</h1>
        <p className='ml-4 text-slate-700'>Home / TeamMember / Team Manage</p>
      </div>

      <div className="container mx-auto py-6 mt-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teammates.map((teammate) => (
            <div
              key={teammate.userId}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div className="flex justify-center">
                <img
                  src={person1}
                  alt={teammate.name}
                  className="w-32 h-32 rounded-full mb-4"
                />
              </div>
              <div>
                <div className="text-xl font-semibold mb-2">     {teammate.student_name}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.student_id}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.student_email}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.student_role}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.projectid}</div>
                <div className="text-gray-600 text-sm">{teammate.student_status}</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                 onClick={() => deleteTeammate(teammate.student_id, teammate.projectid)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faComment} />
                  <span className="ml-2">Chat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default Teammates;