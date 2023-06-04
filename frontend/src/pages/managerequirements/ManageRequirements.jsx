import React from 'react';
import RequirementTable from '../../components/requirementtable/RequirementTable'

const MyComponent = () => {
  const data = [
    {
      deadline: '2023-06-30',
      role: 'Team Member',
      assignedTo: 'John Doe',
      title: 'you have to display all the users in a table with buttons to manage it',
      priority: 'High',
      status: 'In Progress'
    },
    {
        deadline: '2023-06-30',
        role: 'Team Member',
        assignedTo: 'John Doe',
        title: 'you have to display all the users in a table with buttons to manage it',
        priority: 'High',
        status: 'Pending'
      },
    // Add more rows as needed
  ];

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

  return (
    <div>
      <h1>Table Example</h1>
      <RequirementTable
        data={data}
        onEdit={handleEdit}
        onAttachment={handleAttachment}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default MyComponent;
