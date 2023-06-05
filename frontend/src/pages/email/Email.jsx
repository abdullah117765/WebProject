import React from 'react';
import EmailList from '../../components/emailcard/EmailList';

const EmailPage = () => {
  const emails = [
    {
      sender: 'axiomshah@gmail.com',
      subject: 'Requirement error',
      content: 'With respect it is stated that there have been some mistake regarding the requriements that you have provided to us. So it would be appropriate if you meet me tommorrow at my place',
    },
    {
      sender: 'i200457@nu.edu.pk',
      subject: 'Meeting Reminder',
      content: 'Just a reminder about the meeting tomorrow.',
    },
    // Add more emails here
  ];

  return (
    <div className='bg-zinc-200 h-full'>

<div className="container w-full h-16 pt-7 bg-zinc-100">
        <h1 className='ml-4 text-2xl mb-3 text-blue-300'>Requirement Manage</h1>
        <p className='ml-4 text-slate-700'>"Website / Products / Category"</p>
      </div>



    <div className="container mx-auto pt-24 ">
      <EmailList emails={emails} />
    </div>
    </div>
  );
};

export default EmailPage;
