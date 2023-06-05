import React, { useState, useEffect } from 'react';
import MemberList from '../../components/membercard/MemberList';
import person from "../../Resources/person2.jpeg"

const members = [
    {
      userId: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: person,
      batch: '2021',
      phoneNumber: '123-456-7890',
      degree: 'Bachelor of Science',
      section: 'A',
      dateOfBirth: '1990-01-01',
    },
    {
        userId: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: person,
        batch: '2021',
        phoneNumber: '123-456-7890',
        degree: 'Bachelor of Science',
        section: 'A',
        dateOfBirth: '1990-01-01',
      },
      {
        userId: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: person,
        batch: '2021',
        phoneNumber: '123-456-7890',
        degree: 'Bachelor of Science',
        section: 'A',
        dateOfBirth: '1990-01-01',
      },
      {
        userId: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: person,
        batch: '2021',
        phoneNumber: '123-456-7890',
        degree: 'Bachelor of Science',
        section: 'A',
        dateOfBirth: '1990-01-01',
      },
    {
      userId: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: person,
      batch: '2022',
      phoneNumber: '987-654-3210',
      degree: 'Bachelor of Arts',
      section: 'B',
      dateOfBirth: '1991-02-02',
    },
    // Add more member objects here...
  ];
  
  const MemberPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
  
    const handleViewDetails = (member) => {
      setSelectedMember(member);
    };
  
    return (
      <div className="container mx-auto py-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Member List</h1>
        <MemberList members={members} onViewDetails={handleViewDetails} />
        {selectedMember && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={selectedMember.avatar}
                  alt="Member Avatar"
                />
                <h2 className="text-2xl font-semibold">{selectedMember.name} Details</h2>
              </div>
              <p>
                <span className="font-medium">User ID:</span> {selectedMember.userId}
              </p>
              <p>
                <span className="font-medium">Batch:</span> {selectedMember.batch}
              </p>
              <p>
                <span className="font-medium">Phone Number:</span> {selectedMember.phoneNumber}
              </p>
              <p>
                <span className="font-medium">Degree:</span> {selectedMember.degree}
              </p>
              <p>
                <span className="font-medium">Section:</span> {selectedMember.section}
              </p>
              <p>
                <span className="font-medium">Date of Birth:</span> {selectedMember.dateOfBirth}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mt-4"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MemberPage;