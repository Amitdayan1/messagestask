import React from "react";
import axios from "axios";



class MessageSender extends React.Component {

    state = {
        username: "",
        title: "",
        body:"",
        validFields: false
    }
    usernameChange = (e) => {
        let username = e.target.value;
        this.setState({
            username: username
        })
    }
    titleChange = (e) => {
        let title = e.target.value;
        this.setState({
            title:title
        })
    }
    bodyChange = (e) => {
        let body = e.target.value;
        this.setState({
            body:body
        })
    }
    usernameExsit=()=>{
        return true;
    }
    validateFields() {
       if(this.state.title.length>0&&this.state.body.length>0 &&this.usernameExsit){
           this.setState({
               validFields:true
           })
       }
    }


    render() {
        return(
            <div>
               <h1> Send a message to your friends :) </h1>
                <div>
                    <p> Message to (Phone number) :
                        <input type="text" pattern="\d*" onChange={this.usernameChange} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p> Title:
                        <input type="text" onChange={this.titleChangeChange} placeholder="Enter title.." maxLength="30"/></p>
                </div>
                <div>
                    <p> Body:
                        <input type="text" onChange={this.titleChangeChange} placeholder="Enter your message here.." maxLength="300"/></p>
                </div>
                <button>SEND</button>

            </div>
        )

    }

}
export default MessageSender;
