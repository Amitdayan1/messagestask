import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Message from "./Message";


class UserPage extends React.Component {
    state={
        messages:[],
    }



    render() {
        return(
            <div>
                {this.state.messages.map(message=>{
                    return(
                    <Message data={message}/>
                    )})}

                <Link to={"/MessageSender"}><button style={{background:"cyan",width:"150px",height:"50px"}}>Send message to your friends </button></Link>
                <p style={{textAlign:"left"}}><button>Log Out</button></p>
            </div>
        )

    }

}
export default UserPage;
