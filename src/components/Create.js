import React, { Component } from "react";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      users: [],
    };
  }
  componentDidMount() {
    this.setState({
      users: ["test user"],
      first_name: "test",
      last_name: "test",
      phone_number: 1234567,
      email: "test",
    });
  }
  onFirstNameChange(e) {
    this.setState({
      first_name: e.target.value,
    });
  }
  onLastNameChange(e) {
    this.setState({
      last_name: e.target.value,
    });
  }
  onNumberChange(e) {
    this.setState({
      phone_number: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const contact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      email: this.state.email,
    };
    fetch("http://localhost:8888/contacts/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((contact) => {
        console.log("Success:", contact);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      <div>
        <h1>CREATE</h1>
        <form onSubmit={this.onSubmit}>
          <div className="first_name">
            <label htmlFor="">FIRST NAME</label>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.onFirstNameChange}
            />
          </div>
          <div className="last_name">
            <label htmlFor="">LAST NAME</label>
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.onLastNameChange}
            />
          </div>
          <div className="number">
            <label htmlFor="">NUMBER</label>
            <input
              type="text"
              value={this.state.phone_number}
              onChange={this.onNumberChange}
            />
          </div>
          <div className="email">
            <label htmlFor="">EMAIL</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Create Contact" />
          </div>
        </form>
      </div>
    );
  }
}
