import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button onClick={ () => console.log("I edit notes")}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
