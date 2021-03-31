import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
    console.log(props.notes.id)
  return (
    <ul>
      {/* {props.notes.map(note => <NoteItem note={note} />)} */}
      {props.notes.map(note => <NoteItem key={note.id} note={note} selectedNotes={props.selectedNotes}/>)}
    </ul>
  );
}

export default NoteList;



