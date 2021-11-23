import './App.css';
import React from "react";
import HomePage from "./HomePage";


class App extends React.Component {
    render() {
        return (

            <div className="App">
               <HomePage/>
                <p className="names">This task made by Amit Dayan & Adi Dayan & </p>
            </div>
        );
    }
}

export default App;
