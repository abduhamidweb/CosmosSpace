import React from 'react';
import "./styleInput.css"
const Input = ({ inputType, inputPlaceholder }) => {
  return (
    <>
      <input type={inputType} placeholder={inputPlaceholder} required autoComplete='off'/>
    </>
  );
};

export default Input;