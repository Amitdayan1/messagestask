import React from "react";

class LoginPage extends React.Component{

    state={
        username:"",
        password:""
    }
usernameChange=(e)=>{
       let username=e.target.value;
       this.setState({
           username:username
       })
}
passwordChange=(e)=>{
        let password=e.target.value;
        this.setState({
            password:password
        })
    }
    logIn=()=>{

    }

    render() {
        return(
            <div>
                <div>Welcome To Login Page :) </div>
                <div>
                    <p> Please Enter Your Username :
                <input type="text" onChange={this.usernameChange}/></p>
                </div>
                <div>
                    <p> Please Enter Your Password :
                    <input type="text" onChange={this.passwordChange}/></p>
                </div>
                <button onClick={this.logIn}>Log In</button>
            </div>
        )

    }

}
export default LoginPage;
