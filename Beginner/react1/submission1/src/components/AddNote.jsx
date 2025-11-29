/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import Input from './Input';

const AddNote = ({ addNote, setModalOpen }) => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  const onNoteAdding = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    addNote((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);

    setModalOpen(false);
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={onNoteAdding}>
            <div>
              <h1 className='heading'>Create New Note</h1>
              <div>
                <label>
                  <small className='50-characters'>
                    Remaining characters: <span className=''>{50 - title.length}</span>
                  </small>
                </label>
              </div>  
              <Input
                value={title}
                onChange={setTitle}
                type='text'
                id='title'
                className="input-text"
                name='title'
                required
                placeholder='Title Noted...'
              />
              <Input
                value={note}
                onChange={setNote}
                type='textarea'
                id='note'
                className="input-textarea"
                name='note'
                required
                placeholder='Description Your Noted...'
              />
              <div>
                <Input
                  id='submit_form'
                  name='submit_form'
                  className='button'
                  type='submit'
                  htmlFor="add-note"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddNote;