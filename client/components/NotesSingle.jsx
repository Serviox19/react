import React, {Component} from 'react';

export default class NotesSingle extends Component {
  render() {
    return(
      <li>
        {this.props.notes.text}
        {this.props.notes.complete.toString()}
      </li>
    )
  }
}
