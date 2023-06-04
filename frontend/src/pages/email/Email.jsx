import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const EmailForm = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/send-email', {
        recipientEmail,
        subject,
        message,
      });
      setStatus('Email sent successfully');
      // Handle success - show a success message to the user
    } catch (error) {
      console.log('Error sending email:', error);
      setStatus('Error sending email');
      // Handle error - show an error message to the user
    }
  };

  const handleComposeClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4  w-96">
      {!isOpen && (
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleComposeClick}
        >
          Compose
        </button>
      )}

      {isOpen && (
        
        <div className="max-w-lg mx-auto my-4 p-4 border rounded bg-white">
          <div className="flex justify-between">
          <h2 className="text-lg font-semibold">New Message</h2>
          <button onClick={handleCloseClick}>
          <FontAwesomeIcon icon={faTimes} className="text-gray-400 hover:text-gray-600 mb-7" />
        </button>
          </div>
          
          <div className="mb-4 ">
         
            <input
               
              className="w-full border-none outline-none text-lg  mb-2  "
              type="email"
              placeholder="To"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full border-none outline-none text-lg  mb-2"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4  ">
            <textarea
              className="w-full border-none outline-none resize-none text-lg   "
              rows="8"
              placeholder="Compose email"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {status && <div className="text-red-500 mb-4">{status}</div>}
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
