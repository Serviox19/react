import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import NotesForm from '../components/NotesForm.jsx';
import NotesSingle from '../components/NotesSingle.jsx';

Notes = new Mongo.Collection("notes");

export default class Home extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        notes: Meteor.subscribe("allNotes")
      }
    }
  }


  componentWillUnmount() {
    this.state.subscription.notes.stop();
  }

  notes() {
    return Notes.find().fetch();
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
        <ul className="notes">
          {this.notes().map( (notes)=>{
            return <NotesSingle key={notes._id} notes={notes} />
          })}
        </ul>
      </div>
    )
  }
}
