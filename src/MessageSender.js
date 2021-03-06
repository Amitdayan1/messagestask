import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {Link} from "react-router-dom";



class MessageSender extends React.Component {

    state = {
        usernameReceiver:"",
        title:"",
        body:"",

    }
    usernameReceiverChange = (e) => {
        let usernameReceiver = e.target.value;
        this.setState({
            usernameReceiver: usernameReceiver,

        })
    }
    titleChange = (e) => {
        let title = e.target.value;
        this.setState({
            title:title,

        })
    }
    bodyChange = (e) => {
        let body = e.target.value;
        this.setState({
            body:body,

        })
    }
    sendMessage=()=>{
        let cookies=new Cookies()
        let token= cookies.get("token")
        axios.get("http://127.0.0.1:8989/get-username-by-token",{
            params:{
                token:token
            }})
            .then(response1=> {
            axios.get("http://127.0.0.1:8989/send-message", {
                params: {
                    sender: response1.data,
                    receiver: this.state.usernameReceiver,
                    title: this.state.title,
                    body: this.state.body
                }
            }).then(response => {
                if (response.data) {
                    alert("Message Sent")
                } else {
                    alert("one or more details are wrong")
                }
                this.clearInputs();

            })})
        }

    clearInputs=()=>{
        this.setState({
            usernameReceiver: "",
            title: "",
            body:"",
        })

        }


    logOut=()=>{

        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();

    }

    render() {
        return(
            <div>
                <p style={{textAlign:"left"}}><Link to={"/UserPage"}><button style={{ marginBottom:"3%",background:"green"}}>Back to user page</button></Link></p>
               <h1 style={{color:"magenta"}}> Send message to your friends :) </h1>
                <div style={{backgroundColor:"#f2f2f2",width:"50%",marginLeft:"25%"}}>
                <div>
                    <p> <label style={{fontWeight:"bold"}}>Message to (Phone number) :</label>
                        <input type="text" pattern="\d*" onChange={this.usernameReceiverChange} value={this.state.usernameReceiver} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p>  <label style={{fontWeight:"bold"}}>Title:</label>
                        <input type="text" onChange={this.titleChange} value={this.state.title} placeholder="Enter title.." maxLength="30"/></p>
                </div>
                <div>
                    <p>   <label style={{fontWeight:"bold"}}>Body:</label>
                        <input type="text" onChange={this.bodyChange} value={this.state.body} placeholder="Enter your message here.." maxLength="300" style={{width:"250px",height:"100px"}}/></p>
                </div>
                <button style={{background:"cyan",width:"150px",height:"50px"}} onClick={this.sendMessage} disabled={this.state.body.length<=0&&this.state.title.length<=0&&this.state.usernameReceiver<=0}>SEND</button>
                </div>
                <p style={{textAlign:"left"}}><Link to={"/"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
            </div>

        )

    }

}
export default MessageSender;
