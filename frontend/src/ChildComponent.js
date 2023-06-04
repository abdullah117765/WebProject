import React, { useContext } from 'react';
import { MYContext } from './CounterContext';

const ChildComponent = () => {
  // Step 8: Use the useContext hook to access the context value
  const { count, setCount } = useContext(MYContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>

    </div>
  );
};

export default ChildComponent;
