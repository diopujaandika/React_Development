/* eslint-disable no-unused-vars */
import React from 'react'

const Input = (attributes) => {
  const changeHandler = (event) => {
    if (attributes.name === "title") {
      const currentText = event.target.value;
      attributes.onChange((oldText) => (currentText.length <= 50 ? currentText : oldText));
    } else {
      attributes.onChange(event.target.value);
    }
  };

  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea
          {...attributes}
          value={attributes.value}
          onChange={changeHandler}
        />
      ) : attributes.type === 'btn' ?
        <div>
          <input 
            type="text" 
            value={attributes.value} 
            onChange={changeHandler} 
          />
          <label htmlFor="add-note">
            <button>
              <svg 
             
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          </label>
        </div>
        : (
          <input
            {...attributes}
            value={attributes.value}
            onChange={changeHandler}
          />
        )}
    </>
  );
}

export default Input;

