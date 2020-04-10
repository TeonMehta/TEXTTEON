import React, { Component} from 'react';
import axios from "axios";

export default class SmartContactList extends Component {
    constructor(props) {
        super(props);
        axios
            .get("http://localhost:8888/smartcontacts/")
            .then((res) =>{
                console.log(res.data);
            })
            .catch((err) =>{
                console.log(err);
            })
    }
    render() {
        return(
            <>

            </>
        )
    }
}