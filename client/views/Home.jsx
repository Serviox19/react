import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Notes = new Mongo.Collection("notes");

export default class App extends TrackerReact(React.Component) {

  notes() {
    return Notes.find({}).fetch();
  }

  addNote(event) {
    event.preventDefault();
    var text = this.refs.note.value.trim();

    Notes.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    console.log(text);
    this.refs.note.value = '';
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
        <form className="new-note" onSubmit={this.addNote.bind(this)}>
          <input type="text" ref="note" placeholder="Enter new Note!" />
        </form>
        <div>
          {getNotes[0].text}
        </div>
      </div>
    )
  }
}
