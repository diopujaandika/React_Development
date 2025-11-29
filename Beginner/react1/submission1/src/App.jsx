/* eslint-disable no-unused-vars */
import { Header } from './components/Header';
import { useState, React, useEffect } from 'react';
import { getInitialData } from './utils/index';
import SectionNote from './components/SectionNote';
import AddNote from './components/AddNote';

const App = () => {

  const [query, setQueryData] = useState('');
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());
  const [modalOpen, setModalOpen] = useState(false);

  const activeNote = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header 
          search={query} 
          changeQuery={setQueryData} 
        />
      </div>
      <div className='note-container'>
        <div className='add_note-container'>
          <AddNote
            addNote={setNotes}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
        <div className='section-container'>
          <SectionNote
            label={'Notes Active'}
            notes={activeNote}
            setNotes={setNotes}
            button={true}
            setModalOpen={setModalOpen}
          />
          <SectionNote 
            label={'Notes Archive'} 
            notes={archivedNotes} 
            setNotes={setNotes} 
          />
        </div>
      </div>
    </div>
  )
}

export default App;