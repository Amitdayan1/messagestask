import React from "react";

function Message(props) {
return(
    <div style={{border:"black solid 3px" ,width:"50%",textAlign:"center" }}>
            <div>Message from : {props.data.sender}</div>
            <div>The title :{props.data.title}</div>
            <div>{props.data.body}</div>

        {/*Barak should add here Seen button*/}
            {/*{props.data.read_or_not >0 ? <div style={{color:"blue"}}>Seen vv</div> : <div style={{color:"red"}}>Not Seen</div>}*/}
        {/*Barak should add here Delete button*/}
    </div>
)
}
export default Message;
