import React from 'react';

Notes = new Meteor.Collection("notes");

export default class App extends React.Component {

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
    return (
      <div>
        <h1>My Notes</h1>
        <form className="new-note" onSubmit={this.addNote.bind(this)}>
          <input type="text" ref="note" placeholder="Enter new Note!" />
        </form>
      </div>
    )
  }
}
