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
    axios.get("http://127.0.0.1:8989/get-username-by-token",{
    params:{
        token:token
    }
}).then(response=>{
    console.log(response.data)
    axios.get("http://127.0.0.1:8989/get-messages-by-username",{
        params:{
            username:response.data
        }
    }).then(response1=>{
        console.log(response1.data)
        this.setState({
            messages:response1.data
        })
    })
})
}
    render(){
    return(
<div style={{textAlign:"left"}}>
    <Link to={"/UserPage"}><button> Back to user page</button> </Link>
    {this.state.messages.map(message => {
        return (
            <div style={{border: "black solid 3px", width: "50%", textAlign: "center"}}>
                <div>Message from : {message.sender}</div>
                <div>The title :{message.title}</div>
                <button onClick={() => axios.get("http://127.0.0.1:8989/set-read-message", {
                    params: {
                        messageId:message.id
                    }
                }).then(response=>{this.getMessages()}) } disabled={message.read==1}>Read</button>
                <button onClick={()=>{axios.get("http://127.0.0.1:8989/delete-message-by-id",{
                    params:{
                        messageId:message.id
                    }
                }).then(response=>{
                    this.getMessages()
                })}}>DELETE</button>

            </div>

        )
    })
    }
    </div>
)
}}
export default Messages;
