import React from "react";



class HomePage extends React.Component {

    state = {
        username: "",
        password: "",
        success: false
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
        if(this.validatePhone(this.state.username)&&
        this.validatePassword(this.state.password))
            this.setState({
                success:true
            })
        else {
            this.setState({
                success:false
            })
        }
        console.log(this.state.success)}

    render() {
        return(
            <div>
                <div>Welcome To Sign Up  :) </div>
                <div>
                    <p> Please Enter Valid Username (Phone number) :
                        <input type="text" pattern="\d*" onChange={this.usernameChange} placeholder="Enter phone number.." maxLength="10"/></p>
                </div>
                <div>
                    <p> Please Enter Valid Password (A-Z-123...):
                        <input type="text" onChange={this.passwordChange} placeholder="Enter password.." maxLength="6"/></p>
                </div>
                <button onClick={this.signUp}>Sign Up</button>
                {this.state.success&&<div> Welcome :)<p> to sign in press : <button> Sign in</button></p></div>}
            </div>
        )

    }

}
export default HomePage;
