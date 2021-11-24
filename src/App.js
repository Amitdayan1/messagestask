import './App.css';
import * as React from "react";
import HomePage from "./HomePage";
import {Route} from "react-router";


class App extends React.Component {
    render() {
        return (
            <div className="App">

               <HomePage/>
                <p className="names">This task made by Amit Dayan & Adi Dayan & Yuval Sarusi & Barak Bitan </p>
            </div>
        );
    }
}

export default App;
