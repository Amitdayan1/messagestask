import React from "react";

function Message(props) {
return(
    <div style={{border:"black solid 5px"}}>
        <p>
            <div>{props.title}</div>
            <div>{props.body}</div>
            <div>{props.senderName}</div>
            {props.data.read_or_not >0 ? <div style={{color:"blue"}}>Seen vv</div> : <div style={{color:"red"}}>Not Seen</div>}

        </p>
    </div>
)
}
export default Message;
