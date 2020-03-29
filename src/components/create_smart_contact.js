import React, { Component} from 'react';
import axios from 'axios';

export default class CreateSmartContact extends Component {
    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            users: []
        }
    }
    componentDidMount() {
        this.setState({
            users:['test user'],
            name: 'test user'
        })
    }

    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    }
    onNumberChange(e){
        this.setState({
            number: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const smartContact = {
            name : this.state.name,
            number : this.state.number
        };
        console.log(smartContact);

        axios.post('http://localhost:8888/smartcontacts/add', smartContact)
            .then(res => console.log(res.data));
        //window.location = '/';
    }
    render() {
        return(
            <div>
                <h1>CREATE SMART CONTACT</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="name">
                        <label htmlFor="">Contact Name:</label>
                        <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                    </div>
                    <div className="name">
                        <label htmlFor="">Contact Number:</label>
                        <input type="text" value={this.state.number} onChange={this.onNumberChange}/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Create SMC"/>
                    </div>
                </form>
            </div>
        )
    }
}