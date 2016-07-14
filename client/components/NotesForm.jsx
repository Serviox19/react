import React, {Component} from 'react';

export default class NotesForm extends Component {

  addNote(event) {
    event.preventDefault();
    var text = this.refs.note.value.trim();

    Notes.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    // console.log(text);
    this.refs.note.value = '';
  }

  render() {
    return(
      <form className="new-note" onSubmit={this.addNote.bind(this)}>
        <input type="text" ref="note" placeholder="Enter new Note!" />
      </form>
    )
  }
}
