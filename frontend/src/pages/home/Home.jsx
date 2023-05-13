import React from 'react';

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white">Sidebar</div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-200">
        {/* Navbar */}
        <nav className="bg-gray-600 p-4">
          <div className="container mx-auto">
            <h1 className="text-white text-xl font-bold">Navbar</h1>
          </div>
        </nav>

        {/* Path */}
        <div className="bg-gray-300 p-4">
          <div className="container mx-auto">
            <p className="text-gray-600">Current Path: /home</p>
          </div>
        </div>

        {/* Component */}
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Component</h2>
          <p>This is your component content.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
