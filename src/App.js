import './App.css';
import * as React from "react";
import HomePage from "./HomePage";
import {Redirect, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import MessageSender from "./MessageSender";
import UserPage from "./UserPage";
import Message from "./Message";
import Cookies from "universal-cookie/es6";



class App extends React.Component {
    state = {
        loggedIn :false ,

    }
    componentDidMount() {
        const cookies = new Cookies();
        if(cookies.get("token") && cookies.get("token").length>0) {
            this.setState({loggedIn :true });

        }
    }

    render() {
        { console.log(this.state.loggedIn)}
        return (
            <div className="App">

                <BrowserRouter>
                    {this.state.loggedIn?
                        <div>

                            <Route path={"/MessageSender"} component={MessageSender}/>
                            <Route path={"/Message"} component={Message}/>
                            <Route path={"/UserPage"} component={UserPage}/>

                    </div>:
                    <div>
                        <Route path={"/"} component={HomePage}/>

                    </div>

                    }

                </BrowserRouter>
                <p className="names">This task made by Amit Dayan & Adi Dayan & Yuval Sarusi & Barak Bitan </p>
            </div>
        );
    }
}

export default App;
