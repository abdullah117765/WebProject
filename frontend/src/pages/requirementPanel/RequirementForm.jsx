import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import FileInput from '../../components/fileinput/FileInput';
import SelectInput from '../../components/selectinput/SelectInput';
import TextAreaInput from '../../components/textareainput/TextAreaInput';
import TextInput from '../../components/textinput/TextInput';

const Form = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState([]);
  const [comments, setComment] = useState([]);
  const [attachments, setAttachment] = useState('');
  const [description, setRequirement] = useState('');
  const [projectid, setprojectid] = useState('');

  const handleReset = () => {
    setprojectid('');
    setTitle('');
    setPriority('Low');
    setStatus('Pending');
    setDeadline('');
    setAssignedTo([]);
    setComment([]);
    setAttachment('');
    setRequirement('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (title.trim() === '' || description.trim() === '' || deadline === '' || projectid === '') {
      // Show error message for empty fields
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      
     
      const formData = new FormData();
      formData.append('title', title);
      formData.append('priority', priority);
      formData.append('assignedTo', JSON.stringify(assignedTo));
      formData.append('status', status);
      formData.append('description', description);
      formData.append('deadline', deadline);
      formData.append('attachments', attachments); 
      if(comments.length !== 0){ 
         const commentObj = { content: comments, createdBy: 'Mian Abdullah' };
         formData.append('comments', JSON.stringify([commentObj]));
     }
     
      formData.append('writtenby', "Mian Abdullah"); // as of now hardcoded
      formData.append('projectid', projectid);
     
     
     

      await axios.post('http://localhost:3001/requirements/createRequirement', formData);

      // Show success message here
      toast.success('Successfully added Requirement');
    } catch (error) { 
      // Show error message here
      toast.error('Failed to create a Requirement');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  return (
    <div className='bg-zinc-200 h-full'>
      <div className="container w-full h-16 pt-7 bg-zinc-100">
        <h1 className='ml-4 text-2xl mb-3 text-blue-300'>Requirement Form</h1>
        <p className='ml-4 text-slate-700'>"Website / Products / Category"</p>
      </div>

      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">

        <SelectInput
            label="Project Id *"
            value={projectid}
            onChange={(e) => setprojectid(Array.from(e.target.selectedOptions, (option) => option.value))}
            options={['Project1', 'Project2', 'project3']} // Replace with your dynamic options
            multiple
          />

          <SelectInput
            label="Assigned To"
            value={assignedTo}
            onChange={(e) => setAssignedTo(Array.from(e.target.selectedOptions, (option) => option.value))}
            options={['Mian Abdullah', 'Mahad Rahahat', 'Ali Hamza']} // Replace with your dynamic options
            multiple
          />

          <TextInput label="Title *" value={title} onChange={(e) => setTitle(e.target.value)} />
          <SelectInput
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            options={['Low', 'Medium', 'High']}
          />
          <div className="mb-4">
            <label htmlFor="deadline" className="block mb-2 font-semibold">
              Deadline *
            </label>
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <SelectInput
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={['Pending', 'In Progress', 'Completed']}
          />
          <TextAreaInput label="Comment" value={comments} onChange={(e) => setComment(e.target.value)} />
          <TextAreaInput
            label="Requirement Details *"
            value={description}
            height="32"
            onChange={(e) => setRequirement(e.target.value)}
          />

          <FileInput label="Attachment" onChange={handleFileChange} />

          <button
            type="reset"
            onClick={handleReset}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
