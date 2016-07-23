import React, {Component} from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="/">Home Page</a></li>
          <li><a href="/me">Me Page</a></li>
        </ul>
      </div>
    )
  }
}
