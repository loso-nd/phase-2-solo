import React from 'react';

const NoteItem = (props) => (

  <li onClick={ () => props.selectedNotes(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body}</p>
  </li>
);

export default NoteItem;




 