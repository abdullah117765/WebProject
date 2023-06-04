import React from 'react';

const RequirementTable = ({ data, onEdit, onAttachment, onDelete, onSubmit }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Deadline
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Assigned to
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Priority
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-colors duration-300`}
          >
            <td className="px-6 py-4 whitespace-wrap">{row.deadline}</td>
            <td className="px-6 py-4 whitespace-wrap">{row.role}</td>
            <td className="px-6 py-4 whitespace-wrap">{row.assignedTo}</td>
            <td className="px-6 py-4 whitespace-wrap">{row.title}</td>
            <td className="px-6 py-4 whitespace-wrap">{row.priority}</td>
            <td className="px-6 py-4 whitespace-wrap">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                  row.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : row.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : row.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : ''
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    row.status === 'Pending'
                      ? 'bg-yellow-500'
                      : row.status === 'In Progress'
                      ? 'bg-blue-500'
                      : row.status === 'Completed'
                      ? 'bg-green-500'
                      : ''
                  }`}
                />
                <span className="ml-1">{row.status}</span>
              </span>
            </td>
            <td className="px-6 py-4 whitespace-wrap">
              <button
                className="text-indigo-600 hover:text-indigo-900 mr-2"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
              <label
                className="text-indigo-600 hover:text-indigo-900 mr-2 cursor-pointer"
              >
                Browse
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => onAttachment(e.target.files[0], index)}
                />
              </label>
              <button
                className="text-red-600 hover:text-red-900 mr-2"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
              <button
                className="text-green-600 hover:text-green-900"
                onClick={() => onSubmit(index)}
              >
                Submit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default RequirementTable ;
