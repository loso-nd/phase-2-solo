import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {



  render() {
    return (
      <div className='master-detail-element sidebar'>
        {/* <NoteList notes={this.props.notes} /> */}
        <NoteList note={this.props.notes} selectedNotes={this.props.selectedNotes}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
