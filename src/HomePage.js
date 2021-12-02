import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {Redirect} from "react-router";

class HomePage extends React.Component {

    state = {
        username: "",
        password: "",
        success:false
    }
    usernameChange = (e) => {
        let username = e.target.value;
        this.setState({
            username: username
        })
    }
    passwordChange = (e) => {
        let password = e.target.value;
        this.setState({
            password: password
        })
    }
     validatePhone(phone) {
        const regex = /^\(?([0])?([5])\)?([0-9])\)?([0-9]{7})$/;
        if(!regex.test(phone)){
            alert("Invalid phone number ");
        }
        return regex.test(phone);

    }
    validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!regex.test(password)){
            alert("Invalid password");

        }
        return regex.test(password);
    }
    signUp=()=> {
        if (this.validatePhone(this.state.username) && this.validatePassword(this.state.password)){

        axios.get("http://127.0.0.1:8989/add-user",{
            params: {
                username: this.state.username,
                password: this.state.password
            } })
            .then((response)=> {
                console.log("ente :"+response.data);

                if (response.data) {
                    alert("user created successfully")
                }
               else {  alert("username already exist ! ")}
            })}

    }
    login=()=>{
        axios.get("http://127.0.0.1:8989/log-in",{
            params: {
                username: this.state.username,
                password: this.state.password
            } }).then(response=> {
                switch (response.data){
                    case "wrongName":  alert("This username not exist"); break;
                    case "wrongPassword":  alert("Wrong password"); break;
                    case "lockedUser":   alert("Blocked Account Contact Administrator"); break;
                    default :
                        this.setState({success:true});
                        let cookies = new Cookies()
                        cookies.set("token", response.data)
                        window.location.reload();

                }

            })
    }


    render() {

      {if(this.state.success) return (<Redirect to={"/UserPage"}/>)}
        return(
            <div>
                <h1 style={{color:"magenta"}}>Welcome :)</h1>
                <div>
                    <p> Please Enter Valid Username (Phone number) :
                        <input type="text" pattern="\d*" onChange={this.usernameChange} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p> Please Enter Valid Password (A-Z-123...) :
                        <input type="text" onChange={this.passwordChange} placeholder="Enter password.." minLength="6"/></p>
                </div>
                <button onClick={this.signUp} style={{background:"cyan",width:"150px",height:"50px"}}>Sign Up</button>
                <p><button style={{background:"greenyellow",width:"150px",height:"50px"}} onClick={this.login}>Sign in</button></p>
            </div>
        )

    }

}
export default HomePage;
