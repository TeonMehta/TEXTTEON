import React, { Component } from "react";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8888/contacts/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        {console.log(this.state.contacts)}
        {this.state.contacts.map((contact, i) => (
          <div key={i}>
            <div className="name">{contact._id}</div>
            <div className="name">{contact.first_name}</div>
            <div className="name">{contact.last_name}</div>
            <div className="number">{contact.phone_number}</div>
            <div className="number">{contact.email}</div>
          </div>
        ))}
      </>
    );
  }
}
