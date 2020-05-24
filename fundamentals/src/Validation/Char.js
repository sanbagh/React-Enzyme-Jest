import React from 'react';
import './Char.css';
const char = function (props) {
  return (
    <p className='Char' onClick={props.clicked}>
      {props.char}
    </p>
  );
};
export default char;
