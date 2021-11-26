import './App.css';
import * as React from "react";
import HomePage from "./HomePage";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route path={"/MessageSender"} component={"MessageSender"}/>
                </BrowserRouter>
               <HomePage/>
                <p className="names">This task made by Amit Dayan & Adi Dayan & Yuval Sarusi & Barak Bitan </p>
            </div>
        );
    }
}

export default App;
