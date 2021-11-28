import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {Link} from "react-router-dom";



class MessageSender extends React.Component {

    state = {
        currentUserName:"",
        usernameReceiver: "",
        title: "",
        body:"",
        validFields: false
    }
    usernameReceiverChange = (e) => {
        let usernameReceiver = e.target.value;
        this.setState({
            usernameReceiver: usernameReceiver
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
    //need phone number by token
    getCurrentUserName=()=>{
    let cookies=new Cookies()
    let token= cookies.get("token")
    axios.get("http://127.0.0.1:8989/get-sendername-by-token",{
    params:token
}).then(name=>{
    let currentUserName=name.data
        this.setState({
            currentUserName:currentUserName
        })
})}
    sendMessage=()=>{
        axios.get("http://127.0.0.1:8989/add-message",{
            params: {
                sender: this.state.currentUserName,
                receiver: this.state.usernameReceiver,
                title: this.state.title,
                body: this.state.body,
                sendDate: (1 - 5 - 2021),
                readDate: (2 - 6 - 2021)
            }}).then(response=>{
                if(response.data)
                alert("Message Sent ")
            }
        )}

    // usernameExist=()=>{
    //     return true;
    // }
    // validateFields() {
    //    if(this.state.title.length>0&&this.state.body.length>0 &&this.usernameExsit){
    //        this.setState({
    //            validFields:true
    //        })
    //    }
    //}
    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
    }

    render() {
        return(
            <div>
                <p style={{textAlign:"left"}}><Link to={"/UserPage"}><button>Your Messages</button></Link></p>
               <h1> Send a message to your friends :) </h1>
                <div style={{textAlign:"center"}}>
                    <p> Message to (Phone number) :
                        <input type="text" pattern="\d*" onChange={this.usernameReceiverChange} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p> Title:
                        <input type="text" onChange={this.titleChange} placeholder="Enter title.." maxLength="30"/></p>
                </div>
                <div>
                    <p> Body:
                        <input type="text" onChange={this.bodyChange} placeholder="Enter your message here.." maxLength="300" style={{width:"250px",height:"100px"}}/></p>
                </div>
                <button style={{background:"cyan",width:"150px",height:"50px"}} onClick={this.sendMessage}>SEND</button>
                <p style={{textAlign:"left"}}><Link to={"/HomePage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
            </div>
        )

    }

}
export default MessageSender;
