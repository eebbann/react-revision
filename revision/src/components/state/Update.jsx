import React, { useState } from 'react';

const ReflectExample = () => {
  const [state, setState] = useState({ count: 0 });

  const incrementCount = () => {
    // Using Reflect to dynamically update the state property
    setState((prevState) => {
      const nextState = { ...prevState };
      Reflect.set(nextState, 'count', prevState.count + 1);
      return nextState;
    });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ReflectExample;
