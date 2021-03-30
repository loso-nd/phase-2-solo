import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {/* {props.notes.map(note => <NoteItem note={note} />)} */}
      {props.note.map(note => <NoteItem key={props.note.id} note={note} selectedNotes={props.selectedNotes}/>)}
    </ul>
  );
}

export default NoteList;



