import React, { useState } from 'react';

// Sample table data
const tableData = [
  { deadline: '2023-06-10', role: 'Manager', assignedTo: 'John', title: 'Important Task', priority: 'High' },
  { deadline: '2023-06-15', role: 'Developer', assignedTo: 'Alice', title: 'Fix Bugs', priority: 'Medium' },
  { deadline: '2023-06-20', role: 'Manager', assignedTo: 'Bob', title: 'Meeting Preparation', priority: 'High' },
  { deadline: '2023-06-25', role: 'Tester', assignedTo: 'Jane', title: 'Test Cases Execution', priority: 'Low' },
];

const TableComponent = () => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const filterData = () => {
    let filtered = tableData;

    if (selectedRole !== 'All') {
      filtered = filtered.filter((item) => item.role === selectedRole);
    }

    if (searchQuery !== '') {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <div>
        <label htmlFor="roleFilter">Filter by Role:</label>
        <select id="roleFilter" value={selectedRole} onChange={handleRoleChange}>
          <option value="All">All</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
        </select>
      </div>

      <div>
        <label htmlFor="searchInput">Search by Title:</label>
        <input
          id="searchInput"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>

      <button onClick={filterData}>Apply Filters</button>

      <table>
        <thead>
          <tr>
            <th>Deadline</th>
            <th>Role</th>
            <th>Assigned To</th>
            <th>Title</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.deadline}</td>
              <td>{item.role}</td>
              <td>{item.assignedTo}</td>
              <td>{item.title}</td>
              <td>{item.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
