import React, { useEffect, useState } from 'react';
import EmailList from '../../components/emailcard/EmailList';
import axios from 'axios';
import { toast } from 'react-toastify';
import EmailForm from '../../components/emailcard/EmailForm';

const EmailPage = () => {
  const [emails, setEmails] = useState([]);
  const [showCompose, setShowCompose] = useState(false);

  useEffect(() => {
    // Fetch emails when the component mounts
    getEmails();
  }, []);

  const getEmails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/email/getreceived/i200457@nu.edu.pk'); // for now it is hardcoded as login is not implemented
      setEmails(response.data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleComposeClick = () => {
    setShowCompose(true);
  };

  const handleCloseCompose = () => {
    setShowCompose(false);
  };

  return (
    <div className='bg-zinc-200 h-full'>
      <div className="container w-full h-16 pt-7 bg-zinc-100">
        <h1 className='ml-4 text-2xl mb-3 text-blue-300'>Requirement Manage</h1>
        <p className='ml-4 text-slate-700'>"Home  / Emails"</p>
      </div>
      <div className="container mx-auto pt-24">
        <div className="flex justify-end mb-4">
          {!showCompose && (
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleComposeClick}
            >
              Compose
            </button>
          )}
        </div>
        <EmailList emails={emails} />
      </div>
      {showCompose && <EmailForm onCloseCompose={handleCloseCompose} />}
    </div>
  );
};

export default EmailPage;
