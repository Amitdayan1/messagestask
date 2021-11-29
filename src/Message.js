import React from "react";
import axios from "axios";

function Message(props) {
return(
    <div style={{border:"black solid 3px" ,width:"50%",textAlign:"center" }}>
            <div>Message from : {props.data.sender}</div>
            <div>The title :{props.data.title}</div>
            <div>{props.data.body}</div>
        <button onClick={() => axios.get("http://127.0.0.1/set-read-message", {
            params: {
                messageId: props.data.id
            }
        })}
         disabled={props.data.read ===1 }>Read </button>
        <button onClick={()=>axios.get("http://127.0.0.1/delete-message-by-id",{
            params:{
                messageId:props.data.id
            }
        })}>DELETE</button>
    </div>
)
}
export default Message;
