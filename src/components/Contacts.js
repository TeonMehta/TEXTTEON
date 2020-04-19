import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Update from "./Update";
const apiUrl = "http://localhost:8888/contacts/";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch(console.log);
  }

  deleteContact(id) {
    axios.delete(apiUrl + id).then((response) => {
      console.log(response.data);
    });
    this.setState({
      contacts: this.state.contacts.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <>
        {this.state.contacts.map((contact, i) => (
          <div key={i}>
            <Card variant="outlined" className="contact_card">
              <CardContent>
                <Typography component="h3">{contact._id}</Typography>
                <Typography component="h3">{contact.first_name}</Typography>
                <Typography component="h3">{contact.last_name}</Typography>
                <Typography component="h3">{contact.phone_number}</Typography>
                <Typography component="h3">{contact.email}</Typography>
                <Typography component="h3">{contact.gender}</Typography>
                <Typography component="h3">{contact.instagram}</Typography>
                <Typography component="h3">{contact.snapchat}</Typography>
                <Typography component="h3">{contact.twitter}</Typography>
                <Typography component="h3">{contact.interest}</Typography>
                <Typography component="h3">{contact.industry}</Typography>
                <Typography component="h3">{contact.job}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">MORE</Button>
                <Button
                  size="small"
                  onClick={() => {
                    this.deleteContact(contact._id);
                  }}
                >
                  DELETE
                </Button>
                <Link to={"/edit/" + contact._id}>
                  <Button size="small">UPDATE</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        ))}
      </>
    );
  }
}
