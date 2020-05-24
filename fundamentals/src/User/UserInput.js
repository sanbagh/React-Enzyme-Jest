import React from 'react';
const UserInput = function (props) {
    
  return <input onChange ={props.nameChanged} value ={props.username}/>;
};
export default UserInput;
