import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
    <div className="navigation-wrapper">
        <ListGroup>
            <ListGroupItem className="list-group-item list-i">
            <a className="llink" href="#">About</a>
            </ListGroupItem>
            <ListGroupItem className="list-group-item list-i ">
            Contact
            </ListGroupItem>
        </ListGroup>
    </div>

    )
  };
}

export default Navigation;