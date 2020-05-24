import React from 'react';
const validate = function (props) {
  let message = '';
  if (props.count === 0) {
      message = '';
  } else if (props.count < 5) {
    message = 'Text too short';
  }
  if (props.count > 15) {
    message = 'Text long enough';
  }
  return <p>{message}</p>;
};
export default validate;
