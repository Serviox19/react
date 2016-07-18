import React, {Component} from 'react';

export default class NotesSingle extends Component {

  toggleChecked() {
    console.log(this);
    Meteor.call('toggleNote', this.props.notes._id, this.props.notes.complete)
  }

  deleteNote() {
    Meteor.call('deleteNote', this.props.notes._id)
  }

  render() {
    return(
      <li>
        <input type="checkbox"
            readOnly={true}
            checked={this.props.notes.complete}
            onClick={this.toggleChecked.bind(this)} />
          {this.props.notes.text}
        <button className="btn-cancel"
              onClick={this.deleteNote.bind(this)}>
              &times;
        </button>
      </li>
    )
  }
}
