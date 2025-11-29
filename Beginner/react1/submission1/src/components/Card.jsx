/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button';
import { showFormattedDate } from '../utils';

const Card = ({ data, event }) => {

  const { id, title, createdAt, body, archived } = data;

  const onDeletedNote = (item) => event((notes) => notes.filter((note) => note.id !== item));

  const onArchive = (item) => {
    event((notes) => notes.map((note) => {
      if (note.id === item) return { ...note, archived: !note.archived };
      return note;
    }));
  }

  return (
    <div id={id} className='card-container'>
      <div className='card'>
        <h2>{title}</h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
        <div>
          <Button 
            label="Deleted" 
            eventHandler={() => onDeletedNote(id)} 
            />
            <Button
              btnType={archived}
              label={archived ? "unarchived" : "archive"}
              eventHandler={() => onArchive(id)}
          />
        </div>
        <></>
      </div>
    </div>
  )
}

export default Card;
