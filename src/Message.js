import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {Link} from "react-router-dom";


class Messages extends React.Component{
    state={
        messages:[],
        read:0
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
        console.log(response1.data)
        let readMessages = 0;
        response1.data.map((message)=>{
            if (message.read == 1)
                readMessages ++;
        })
        this.setState({
            read:readMessages})
    })

}

    render(){
    return(
<div>
    <p style={{textAlign:"left"}}><Link to={"/UserPage"}><button style={{ marginBottom:"3%",background:"green"}} className={"names"}> Back to user page</button></Link></p>
        <h1 style={{color:"magenta"}}>Your messages </h1>
    <div style={{border:"black solid 3px",borderRadius:"10%",width:"20%",textAlign:"center"}}>
        <p>Don't miss your messages ;)</p>
        <p>Unread Messages: {this.state.messages.length - this.state.read}</p>
        <p>Read Messages: {this.state.read}</p>
    </div>
    {this.state.messages.map(message => {
        return (
            <div style={{border: "black solid 4px", width: "50%", textAlign: "center",marginBottom:"3%"  ,marginLeft:"25%"}}>
                <div style={{textDecoration:"underline"}}>Message from: {message.sender}</div>
                <div>The title: {message.title}</div>
                <div>{message.body}</div>
                {message.read==1 ? <div style={{color:"green",fontWeight:"bold",textAlign:"left"}}> The message was read VV </div>:<div style={{color:"red" , fontWeight:"bold",textAlign:"left"}}> Unread message</div>}
                <button onClick={() => axios.get("http://127.0.0.1:8989/set-read-message", {
                    params: {
                        messageId:message.id
                    }
                }).then(response=>{this.getMessages()}) } disabled={message.read==1} style={{background:"greenyellow", margin:"2%"}}>Read</button>
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
