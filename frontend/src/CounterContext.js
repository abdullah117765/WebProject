import React, { createContext, useState } from 'react';

// Step 2: Create a new context using createContext
export const MYContext = createContext();

// Step 3: Create a custom provider component
const MyProvider = ({ children }) => {
  // Step 4: Define the state variables and functions you want to share
  const [count, setCount] = useState(0);

  // Step 5: Create a value object with the state variables and functions
  const value = {
    count,
    setCount,
  };

  // Step 6: Render the provider component and pass the value object as value prop
  return (
    <MYContext.Provider value={value}>
      {children}
    </MYContext.Provider>
  );
};

export default MyProvider ;