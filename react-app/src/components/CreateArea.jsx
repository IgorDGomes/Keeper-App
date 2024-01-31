import React, { useState } from 'react';

function CreateArea(props) {

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
    <form>
      <input name="title" value={note.title} onChange={ handleChange } placeholder="Title" />
      <textarea name="content" value={note.content} onChange={ handleChange } placeholder="Take a note..." rows="3" />
      <button onClick={ submitNote }>Add</button>
    </form>
  );
}

export default CreateArea;