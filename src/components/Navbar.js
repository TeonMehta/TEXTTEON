import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
export default Navbar;
