import React from 'react';

const MemberCard = ({ member, onViewDetails }) => {
  const handleViewDetails = () => {
    onViewDetails(member);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-2">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={member.avatar}
          alt="Member Avatar"
        />
        <div className="ml-4">
          <h2 className="text-lg font-medium">{member.name}</h2>
          <p className="text-sm text-gray-500">{member.email}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mr-2"
          onClick={handleViewDetails}
        >
          View Details
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => {}}
        >
          Add Teammate
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
