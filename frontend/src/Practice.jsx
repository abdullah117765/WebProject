import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');
  const [projectId, setProjectId] = useState('');
  const [comment, setComment] = useState('');
  const [attachment, setAttachment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block mb-2 font-semibold">
            Priority
          </label>
          <input
            type="text"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block mb-2 font-semibold">
            Status
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block mb-2 font-semibold">
            Deadline
          </label>
          <input
            type="text"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="projectId" className="block mb-2 font-semibold">
            Project ID
          </label>
          <select
            id="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Project ID</option>
            {/* Add options dynamically based on your project data */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2 font-semibold">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="attachment" className="block mb-2 font-semibold">
            Attachment
          </label>
          <input
            type="file"
            id="attachment"
            onChange={(e) => setAttachment(e.target.files[0])}
            className="p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
