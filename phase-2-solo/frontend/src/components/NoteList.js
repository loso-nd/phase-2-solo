import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => <NoteItem note={note}/>)}
      
    </ul>
  );
}

export default NoteList;



