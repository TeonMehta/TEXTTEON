import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faUsers} />
            </Link>
          </li>
          <li>
            <Link to="/create">
              <FontAwesomeIcon icon={faUserPlus} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
