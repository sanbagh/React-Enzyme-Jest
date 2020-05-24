import React from 'react';
import './Person.css';
const person = (props) => {
  return (
    <div className='Person'>
      <p>
        I am {props.name} and i am {props.age} years old.
      </p>
      <p>My Hobbies: {props.children}</p>
      <input onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
