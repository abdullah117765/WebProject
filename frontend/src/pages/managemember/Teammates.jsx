import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faComment } from '@fortawesome/free-solid-svg-icons';
import person from "../../Resources/person2.jpeg"
import person1 from "../../Resources/person.jpeg"
const Teammates = () => {
  const [teammates, setTeammates] = useState([
    {
      userId: 1,
      name: 'Usman Doe',
      email: 'usman.doe@example.com',
      avatar: person,
      batch: '2021',
      phoneNumber: '123-456-7890',
      degree: 'Bachelor of Science',
      section: 'A',
      dateOfBirth: '1990-01-01',
    },
    {
        userId: 2,
        name: 'jane cat',
        email: 'ali@example.com',
        avatar: person1,
        batch: '2020',
        phoneNumber: '133-43-7890',
        degree: 'Bachelor of Science',
        section: 'A',
        dateOfBirth: '1990-01-01',
      },
    // Add more teammates here...
  ]);

 
    const deleteTeammate = (userId) => {
      setTeammates(teammates.filter((teammate) => teammate.userId !== userId));
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
                  src={teammate.avatar}
                  alt={teammate.name}
                  className="w-32 h-32 rounded-full mb-4"
                />
              </div>
              <div>
                <div className="text-xl font-semibold mb-2">{teammate.name}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.email}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.phoneNumber}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.degree}</div>
                <div className="text-gray-600 text-sm mb-2">{teammate.section}</div>
                <div className="text-gray-600 text-sm">{teammate.dateOfBirth}</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => deleteTeammate(teammate.userId)}
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