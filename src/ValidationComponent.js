import React from 'react';

const validationComponent = (props) => {
  let validationText = props.textLength > 5 ? 'Text is long enough' : 'Text is too short';

  return (
    <p>{validationText}</p>
  )
};

export default validationComponent