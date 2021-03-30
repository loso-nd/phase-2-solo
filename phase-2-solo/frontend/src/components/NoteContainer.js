import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const API = "http://localhost:3000/notes"

class NoteContainer extends Component {

  state = {
    notes: [],
    // currentNote: []
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

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
