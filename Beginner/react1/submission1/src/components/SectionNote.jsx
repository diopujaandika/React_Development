/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';

const SectionNote = ({ label, notes, setNotes }) => {
  return (
    <div>
      <div>
        <h1>{label}</h1>
      </div>
      {notes.length === 0 ? <div>
        <h2>Not Find Note!</h2>
        </div>
        : <div className='card-container'>
          {notes.map((note) => <Card key={note.id} data={note} event={setNotes} {...note} />)}
        </div>
      }
    </div>
  )
}

export default SectionNote;