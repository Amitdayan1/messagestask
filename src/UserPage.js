import React from "react";
import {Link} from "react-router-dom";

import Cookies from "universal-cookie/es6";


class UserPage extends React.Component {

    logOut=()=>{
     let cookies=new Cookies();
     cookies.remove("token");
        window.location.reload();
    }
    render() {
        return(
            <div>
                <h1>Welcome :) </h1>
                <div>
                <Link to={"/Message"}><button style={{background:"yellow",width:"150px",height:"50px",margin:"2%"}}> Your messages </button></Link>
                <Link to={"/MessageSender"}><button style={{background:"cyan",width:"150px",height:"50px"}}>Send message</button></Link>
                </div>
                <p style={{textAlign:"left"}}><Link to={"/HomePage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
            </div>
        )

    }

}
export default UserPage;
