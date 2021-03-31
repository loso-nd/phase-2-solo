import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const API = "http://localhost:3000/notes"

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: false
  }

  //fire during the fetch
  componentDidMount = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(allNotes => {
        this.setState({ notes: allNotes })
      })
  }

  // fetchNotes = () => {
  //   fetch(API)
  //     .then(resp => resp.json())
  //     .then(allNotes => {
  //       this.setState({
  //         notes: allNotes
  //       })
  //     })
  // }

  displayNotes = (selectedNote) => {
   // console.log(notes)
    this.setState({ selectedNote }) 
    //   selectedNote : note
    // })
  }

  render() {
    console.log(this.state.selectedNote)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes}  selectedNotes={this.displayNotes}/>
          <Content selectedNote={this.state.selectedNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
