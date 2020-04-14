import React, { Component } from "react";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      number: "",
      email: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:8888/contacts/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          number: res.data.number,
        });
      })
      .catch(console.log);
  }
  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onNumberChange(e) {
    this.setState({
      number: e.target.value,
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
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
    };
    fetch("http://localhost:8888/contacts/" + this.props.match.params.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((res) => console.log(res.data));
  }
  render() {
    return (
      <>
        <h1>EDIT</h1>
        <form onSubmit={this.onSubmit}>
          <div className="name">
            <label htmlFor="">Contact Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div className="number">
            <label htmlFor="">Contact Number:</label>
            <input
              type="text"
              value={this.state.number}
              onChange={this.onNumberChange}
            />
          </div>
          <div className="email">
            <label htmlFor="">ContactEmail:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="EDIT SMC" />
          </div>
        </form>
      </>
    );
  }
}
