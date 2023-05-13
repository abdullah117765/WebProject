import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <div className="p-4">
          {/* Sidebar content */}
          <h1 className="text-white text-lg font-bold">Sidebar</h1>
          {/* Add your sidebar content here */}
          <ul className="mt-4">
            <li>
              <button
                className="flex items-center text-white hover:bg-gray-700 px-2 py-1 rounded"
                onClick={toggleDropdown}
              >
                <span>Menu</span>
                <svg
                  className={`ml-auto h-4 w-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 8l4.586-4.586a2 2 0 012.828 0L18 8h-2.586l-3.293-3.293a1 1 0 00-1.414 0L6.586 8H6zm0 4l4.586 4.586a2 2 0 002.828 0L18 12h-2.586l-3.293 3.293a1 1 0 01-1.414 0L6.586 12H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <ul className="mt-2">
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                    >
                      Dropdown Item 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                    >
                      Dropdown Item 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white hover:bg-gray-700 px-2 py-1 rounded"
                    >
                      Dropdown Item 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
