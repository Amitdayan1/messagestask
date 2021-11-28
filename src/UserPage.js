import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Message from "./Message";
import Cookies from "universal-cookie/es6";



class UserPage extends React.Component {
    state={
        messages:[],
    }
componentDidMount() {
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
    logOut=()=>{
     let cookies=new Cookies();
     cookies.remove("token");
    }
    render() {
        return(
            <div>
                <h1>Your messages </h1>
                {this.state.messages.map(message=>{
                    return(
                        <p>
                            <Message data={message}/></p>
                    )})}

                <Link to={"/MessageSender"}><button style={{background:"cyan",width:"150px",height:"50px"}}>Send message to your friends </button></Link>
                <p style={{textAlign:"left"}}><Link to={"/HomePage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
            </div>
        )

    }

}
export default UserPage;
