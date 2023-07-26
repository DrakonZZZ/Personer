import React from 'react';

const FormSec = ({ type, name, value, handleChange, lableText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lableText || name}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="form-input"
        name={name}
      />
    </div>
  );
};

export default FormSec;
