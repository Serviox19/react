import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import NotesForm from '../components/NotesForm.jsx';
import NotesSingle from '../components/NotesSingle.jsx';

Notes = new Mongo.Collection("notes");

export default class App extends TrackerReact(React.Component) {

  notes() {
    return Notes.find({}).fetch();
  }

  render() {
    let getNotes = this.notes();
    if (getNotes.length < 1) {
      return (<div>Loading....</div>)
    }
    // console.log(this.notes());
    return (
      <div>
        <h1>My Notes</h1>
        <NotesForm />
        <ul>
          <NotesSingle notes={getNotes[0]} />
          <NotesSingle notes={getNotes[1]} />
        </ul>
      </div>
    )
  }
}
