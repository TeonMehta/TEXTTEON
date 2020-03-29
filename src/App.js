import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar";
import SmartContactList from "./components/smart_contact_list";
import EditSmartContacts from "./components/edit_smart_contact";
import CreateSmartContact from "./components/create_smart_contact";
import CreateUser from "./components/create_user";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
            <Navbar/>
            <br/>
            <Switch>
                <Route path="/" exact component={SmartContactList}/>
                <Route path="/edit/id" exact  component={EditSmartContacts}/>
                <Route path="/create" exact component={CreateSmartContact}/>
                <Route path="/user" exact  component={CreateUser}/>
            </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;