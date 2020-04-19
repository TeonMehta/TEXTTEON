import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
const apiUrl = "http://localhost:8888/contacts/";
const apiEditUrl = "http://localhost:8888/contacts/edit/";

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onInstagramChange = this.onInstagramChange.bind(this);
    this.onSnapchatChange = this.onSnapchatChange.bind(this);
    this.onTwitterChange = this.onTwitterChange.bind(this);
    this.onIndustryChange = this.onIndustryChange.bind(this);
    this.onInterestChange = this.onInterestChange.bind(this);
    this.onJobChange = this.onJobChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      gender: "",
      instagram: "",
      twitter: "",
      snapchat: "",
      interest: [],
      industry: "",
      job: "",
      users: [],
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    axios
      .get(apiUrl + this.props.match.params.id)
      .then((response) => {
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone_number: response.data.phone_number,
          email: response.data.email,
          gender: response.data.gender,
          instagram: response.data.instagram,
          twitter: response.data.twitter,
          snapchat: response.data.snapchat,
          industry: response.data.industry,
          interest: response.data.interest,
          job: response.data.job,
        });
      })
      .catch(function (error) {
        console.log(error);
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
  onGenderChange(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onInstagramChange(e) {
    this.setState({
      instagram: e.target.value,
    });
  }
  onSnapchatChange(e) {
    this.setState({
      snapchat: e.target.value,
    });
  }
  onTwitterChange(e) {
    this.setState({
      twitter: e.target.value,
    });
  }
  onInterestChange(e) {
    this.setState({
      interest: e.target.value,
    });
  }
  onIndustryChange(e) {
    this.setState({
      industry: e.target.value,
    });
  }
  onJobChange(e) {
    this.setState({
      job: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const contact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      gender: this.state.gender,
      instagram: this.state.instagram,
      twitter: this.state.twitter,
      snapchat: this.state.snapchat,
      industry: this.state.industry,
      interest: this.state.interest,
      job: this.state.job,
    };
    console.log(contact);

    axios
      .post(apiEditUrl + this.props.match.params.id, contact)
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div>
        <h1>EDIT</h1>
        <form onSubmit={this.onSubmit}>
          <div className="first_name">
            <TextField
              type="text"
              className="first_name"
              id="outlined-basic"
              label="First Name"
              value={this.state.first_name}
              onChange={this.onFirstNameChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="last_name">
            <TextField
              type="text"
              className="last_name"
              id="outlined-basic"
              label="Last Name"
              value={this.state.last_name}
              onChange={this.onLastNameChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="number">
            <TextField
              type="text"
              className="phone_number"
              id="outlined-basic"
              label="Phone Number"
              value={"+1" + this.state.phone_number}
              onChange={this.onNumberChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="email">
            <TextField
              type="text"
              className="email"
              id="outlined-basic"
              label="Email"
              value={this.state.email}
              onChange={this.onEmailChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="gender">
            <FormControl
              component="fieldset"
              style={{ margin: 8, minWidth: 186 }}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="Gender"
                id="Gender"
                value={this.state.gender}
                onChange={this.onGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Prefer Not Say"
                  control={<Radio />}
                  label="Prefer Not Say"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="instagram">
            <TextField
              type="text"
              className="email"
              id="outlined-basic"
              label="Instagram"
              value={this.state.instagram}
              onChange={this.onInstagramChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="twitter">
            <TextField
              type="text"
              className="email"
              id="outlined-basic"
              label="Twitter"
              value={this.state.twitter}
              onChange={this.onTwitterChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="snapchat">
            <TextField
              type="text"
              className="email"
              id="outlined-basic"
              label="Snapchat"
              value={this.state.snapchat}
              onChange={this.onSnapchatChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="interest">
            <FormControl style={{ margin: 8 }}>
              <FormLabel component="legend">Interests</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={this.state.interest}
                      onChange={this.onInterestChange}
                    />
                  }
                  label="Tech"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value={this.state.interest}
                      onChange={this.onInterestChange}
                    />
                  }
                  label="Sports"
                />
              </FormGroup>
            </FormControl>
          </div>
          <div className="industry">
            <FormControl
              variant="outlined"
              style={{ margin: 8, minWidth: 186 }}
            >
              <InputLabel id="Industry">Industry</InputLabel>
              <Select
                labelId="Industry"
                label="Industry"
                value={this.state.industry}
                onChange={this.onIndustryChange}
              >
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="job">
            <TextField
              type="text"
              className="email"
              id="outlined-basic"
              label="Job Title"
              value={this.state.job}
              onChange={this.onJobChange}
              variant="outlined"
              style={{ margin: 8 }}
            />
          </div>
          <div className="submit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: 8 }}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
