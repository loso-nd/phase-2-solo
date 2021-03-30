import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {


  // getNextNote = () => {
  //   this.setState(prevState => {
  //     return {
  //       notes: prevState.notes
  //     }
  //   })
  // }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
