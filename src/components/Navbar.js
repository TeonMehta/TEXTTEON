import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">SmartContactList</Link>
                    </li>
                    <li>
                        <Link to="/user">Create Users</Link>
                    </li>
                    <li>
                        <Link to="/">SmartContacts</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Smart Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}