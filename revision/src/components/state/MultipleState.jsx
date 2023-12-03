import React, { useState } from 'react';

export default function MultipleStatesComponent() {
  // Using multiple states
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed text: {text } with count {count}</p>
    </div>
  );
};
