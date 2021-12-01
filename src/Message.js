import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {Link} from "react-router-dom";
import UserPage from "./UserPage";

class Messages extends React.Component{
    state={
        messages:[],
    }
    componentDidMount() {
        this.getMessages();
    }

    getMessages=()=>{
    let cookies=new Cookies();
    let token=cookies.get("token");

    axios.get("http://127.0.0.1:8989/get-messages-by-token",{
        params:{
            token:token
        }
    }).then(response1=>{
        this.setState({
            messages:response1.data
        })
    })

}
    render(){
    return(
<div style={{textAlign:"center"}}>
    <Link to={"/UserPage"}><button style={{ marginBottom:"3%",background:"green"}}> Back to user page</button></Link>
    {this.state.messages.map(message => {
        return (
            <div style={{border: "black solid 4px", width: "50%", textAlign: "center",marginBottom:"3%"}}>
                <div>Message from : {message.sender}</div>
                <div>The title :{message.title}</div>
                <div>{message.body}</div>
                {message.read==1 ? <div style={{color:"green",fontWeight:"bold"}}> The message was read VV </div>:<div style={{color:"red" , fontWeight:"bold"}}> Unread message</div>}
                <button onClick={() => axios.get("http://127.0.0.1:8989/set-read-message", {
                    params: {
                        messageId:message.id
                    }
                }).then(response=>{this.getMessages()}) } disabled={message.read==1} style={{background:"greenyellow"}}>Read</button>
                <button onClick={()=>{axios.get("http://127.0.0.1:8989/delete-message-by-id",{
                    params:{
                        messageId:message.id
                    }
                }).then(response=>{
                    this.getMessages()
                })}} style={{background:"red"}}>DELETE</button>

            </div>

        )
    })
    }
    </div>
)
}}
export default Messages;
