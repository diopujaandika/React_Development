/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Input from './Input';

export const Header = ({ search, changeQuery }) => {
  return (
    <div className='header-app'>
      <h1 className='title-logo'>MY NOTES APP</h1>
      <Input
        value={search}
        onChange={changeQuery}
        id='title'
        className='search-note'
        name='title'
        required
        placeholder='Search Notes In Here...'
      />
    </div>
  )
}
