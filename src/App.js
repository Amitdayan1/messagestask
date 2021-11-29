import './App.css';
import * as React from "react";
import HomePage from "./HomePage";
import {Redirect, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import MessageSender from "./MessageSender";
import UserPage from "./UserPage";
import Message from "./Message";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Redirect to={"/HomePage"}/>
                    <Route path={"/HomePage"} component={HomePage}/>
                    <Route path={"/MessageSender"} component={MessageSender}/>
                    <Route path={"/Message"} component={Message}/>
                    <Route path={"/UserPage"} component={UserPage}/>
                </BrowserRouter>
                <p className="names">This task made by Amit Dayan & Adi Dayan & Yuval Sarusi & Barak Bitan </p>
            </div>
        );
    }
}

export default App;
