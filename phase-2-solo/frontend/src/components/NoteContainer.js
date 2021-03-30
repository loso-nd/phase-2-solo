import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const API = "http://localhost:3000/notes"

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: []
  }

  //fire during the fetch
  componentDidMount = () => {
    this.fetchNotes()
  }

  fetchNotes = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(allNotes => {
        this.setState({
          notes: allNotes
        })
      })
  }

  selectNotes = () => {
    console.log("I select notes")
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          {/* <Sidebar notes={this.state.notes} handleClick={this.selectNotes}/> */}
          <Sidebar notes={this.state.notes} selectedNotes={this.selectNotes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
