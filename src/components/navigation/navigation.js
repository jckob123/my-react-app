import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Nav } from 'reactstrap';
import '../Navigation/navigation.css';


class Navigation extends Component {
  render() {
    return (
      <BrowserRouter className="navigation-wrapper">
        <Nav>
          <ul className="list-group">
            <li className="list-group-item list-i">
              <Link to="/About" style={{ textDecoration: 'none'}}>About</Link>
            </li>
            <li className="list-group-item list-i">
              <Link to="/Gallery" style={{ textDecoration: 'none',color:"white"}}>Gallery</Link>
            </li>
            <li className="list-group-item list-i">
              <Link to="/Contact"
                    activeClassName="nounderline"
                    activeStyle={{textDecoration: 'none'}}>Contact</Link>
            </li>
          </ul>
        </Nav>
      </BrowserRouter>
    )
  };
}

export default Navigation;