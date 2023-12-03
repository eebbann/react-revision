import React, { useState } from 'react';

const ComplexStateComponent = () => {
  // Using state with a complex object
  const [person, setPerson] = useState({ name: 'John', age: 25 });
 
  const updateAge = () => {
    setPerson((Prevperson) => ({ ...person, age: Prevperson.age + 1 }));
  };  

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
};

export default ComplexStateComponent