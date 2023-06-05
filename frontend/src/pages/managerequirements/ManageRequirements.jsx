import React, { useState } from 'react';
import RequirementTable from '../../components/requirementtable/RequirementTable';

const MyComponent = () => {
  const data = [
    {
      deadline: '2023-06-30',
      role: 'Team Member',
      assignedTo: 'Ali Hamza',
      title: 'you have to display all the users ',
      priority: 'High',
      status: 'In Progress'
    },
    {
      deadline: '2023-06-30',
      role: 'Team Member',
      assignedTo: 'Mahad khan',
      title: 'delete the req ',
      priority: 'Low',
      status: 'Pending'
    },
    {
      deadline: '2023-06-30',
      role: 'Team Lead',
      assignedTo: 'Mian Abdullah',
      title: 'update the customers ',
      priority: 'Low',
      status: 'Completed'
    },
    {
      deadline: '2023-06-30',
      role: 'Team Lead',
      assignedTo: 'Ali Hamza',
      title: 'display the files ',
      priority: 'Low',
      status: 'Pending'
    },
    // Add more rows as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleEdit = (index) => {
    // Handle edit button click
  };

  const handleAttachment = (index) => {
    // Handle attachment button click
  };

  const handleDelete = (index) => {
    // Handle delete button click
  };

  const handleSubmit = (index) => {
    // Handle submit button click
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterPriority = (event) => {
    setFilterPriority(event.target.value);
  };

  const handleFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (item) =>
        filterPriority === '' || item.priority === filterPriority
    )
    .filter(
      (item) =>
        filterStatus === '' || item.status === filterStatus
    );

  return (
    <div className='bg-zinc-200 h-full'>
     

      <div className="container w-full h-16 pt-7 bg-zinc-100">
        <h1 className='ml-4 text-2xl mb-3 text-blue-300'>Requirement Manage</h1>
        <p className='ml-4 text-slate-700'>"Website / Products / Category"</p>
      </div>

      <div className='max-w-6xl ml-64 mt-20'>
        <div className="flex items-center justify-between pr-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search by title"
              className="border border-gray-300 px-2 py-1 rounded-md mr-2"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Priority:</label>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              value={filterPriority}
              onChange={handleFilterPriority}
            >
              <option value="">All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-2">Status:</label>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              value={filterStatus}
              onChange={handleFilterStatus}
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <RequirementTable
          data={filteredData}
          onEdit={handleEdit}
          onAttachment={handleAttachment}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default MyComponent;
