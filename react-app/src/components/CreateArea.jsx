import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [rowNumber, setRowNumber] = useState(1);
  const [cond, setCond] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const {name, value} = event.target
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    if (note.title === '' && note.content === '') {
      alert('Please type a valid note!');
    } else if (note.title === '') {
      alert('Please type a Note with a title!');
    } else if (note.content === '') {
      alert('Please type a Note with a content!');
    } else {
      props.onAdd(note);
      setNote({
        title: '',
        content: ''
      });
      return event.preventDefault();
    }
  }

  return (
    <form className='create-note'>
      { cond && <input name="title" value={note.title} onChange={ handleChange } placeholder="Title" /> }
      <textarea name="content" onClick={ () => {setRowNumber(3); setCond(true);} } value={note.content} onChange={ handleChange } placeholder="Take a note..." rows={ rowNumber } />
      <Zoom in={ cond }>
        <Fab onClick={ submitNote }>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;