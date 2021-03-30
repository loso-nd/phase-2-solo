import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {/* {props.notes.map(note => <NoteItem note={note} />)} */}
      {props.note.map(note => <NoteItem note={note} handleClick={props.selectedNotes}/>)}
    </ul>
  );
}

export default NoteList;



