import React from 'react';
import "./style.css"
const index = ({ planItemText }) => {
  return (
    <>
      <li className="plan-item">
        <p> <i className="bi bi-plus mx-1"></i>{planItemText}</p>
      </li>
    </>
  );
};

export default index;