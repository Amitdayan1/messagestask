import React from "react";
import axios from "axios";



class HomePage extends React.Component {

    state = {
        username: "",
        password: "",
        validFields: false
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
        console.log(regex.test(phone));
        return regex.test(phone);
    }
    validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        console.log(regex.test(password));
        return regex.test(password);
    }
    signUp=()=> {
        if (this.validatePhone(this.state.username) && this.validatePassword(this.state.password)){
            this.setState({
                validFields: true
            })
        axios.get("http://127.0.0.1:8989/add-user",{
            params: {
                username: this.state.username,
                password: this.state.password
            } })
            .then((response)=> {
                if (response.data) {
                    alert("user created successfully")
                }
                else {  alert("username already exist ! ")}
            })}
        else {
            this.setState({
                validFields: false
            })
        }
    }

    render() {
        return(
            <div>
                <h1>Welcome</h1>
                    <h3>To Sign Up  :) </h3>
                <div>
                    <p> Please Enter Valid Username (Phone number) :
                        <input type="text" pattern="\d*" onChange={this.usernameChange} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p> Please Enter Valid Password (A-Z-123...):
                        <input type="text" onChange={this.passwordChange} placeholder="Enter password.." minLength="6"/></p>
                </div>
                <button onClick={this.signUp}>Sign Up</button>
                <p><button>Sign in</button></p>
            </div>
        )

    }

}
export default HomePage;
