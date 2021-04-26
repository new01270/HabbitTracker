import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <i className="navbar-logo fas fa-leaf"></i>
          <span>Habbit Tracker</span>
          <span className="navbar-count">{this.props.totalCount}</span>
        </nav>
      </div>
    );
  }
}

export default Navbar