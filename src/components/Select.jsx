import React from 'react'

export const Select = ({ id, name, value, error, onChange, label, options }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" hidden>Select Category</option>
        {options.map((option,index)=>{
            return(
                <option value={option} key={index}>{option}</option>
            )
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};
