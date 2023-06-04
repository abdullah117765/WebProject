import React, { useState } from 'react';

import FileInput from '../../components/fileinput/FileInput';
import SelectInput from '../../components/selectinput/SelectInput';
import TextAreaInput from '../../components/textareainput/TextAreaInput';
import TextInput from '../../components/textinput/TextInput';




const Form = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');
    const [projectId, setProjectId] = useState('');
    const [comment, setComment] = useState('');
    const [attachment, setAttachment] = useState('');
    const [requirement, setRequirement] = useState('');



    const handleReset = () => {
        setTitle('');
        setPriority('');
        setStatus('');
        setDeadline('');
        setProjectId('');
        setComment('');
        setAttachment('');
        setRequirement('');
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      // Do something with the file
      console.log(file);
      setAttachment(file);
    };
  
    return (
        <div className="container mx-auto py-8">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <SelectInput
              label="Project ID"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              options={['Project1', 'Project2', 'Project3']} // Replace with your dynamic options
            />
            <SelectInput
              label="Assigned To"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              options={['Mian Abdullah', 'Mahad Rahahat', 'Ali Hamza']} // Replace with your dynamic options
            />


            <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextInput label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
            <div className="mb-4">
              <label htmlFor="deadline" className="block mb-2 font-semibold">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <TextInput label="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
            <TextAreaInput label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <TextAreaInput label="Requirement Details" value={requirement} height="32" onChange={(e) => setRequirement(e.target.value)} />
            
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
      );
    };
    
   
  
  export default Form;