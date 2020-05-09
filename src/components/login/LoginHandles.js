import React, { Component } from 'react';
import LoginForm from './LoginForm';
import axios from "axios"
// import {handleChange2} from '../handleChange';
import {
    Redirect
} from "react-router-dom";
import { loginApi, serverApi } from '../constants/constants';

class LoginHandles extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            isLogin: false,
            user_type: '' 
        }
        this.handleChange = this.handleChange.bind(this)
        this.validation = this.validation.bind(this)
        this.login = this.login.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    validation() {
        let isError = false
        const errors = {
            emailError: "",
            passwordError: ""
        };

        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.email === "") {
            isError = true;
            errors.emailError = "Please Enter email";
        }
        else {
            if (!emailRex.test(this.state.email)) {
                isError = true;
                errors.emailError = "Requires valid email";
            }
        }

        if (this.state.password === "") {
            isError = true;
            errors.passwordError = "Please Enter Password";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    login() {
        const err = this.validation();

        // if(!err){
        //     localStorage.setItem("token","dbdjhsdgbfsgdsfsd")
        //     this.setState({isLogin:1})
        //     alert("login succesfull")
        // }
        if (!err) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                email: this.state.email,
                password: this.state.password,
            }
            axios.post(`${serverApi}${loginApi}`, config).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    //           this.setState({ isLogin: true })
                    localStorage.setItem("token", res.data.data.token)
                    // localStorage.setItem("id", res.data.id)
                    console.log("response", res)
                    console.log("token", res.data.data.token)
                    console.log("id", res.data.data.id)

                    this.setState({
                        isLogin: true,
                        user_type:res.data.data.user_type
                    })
                    // console.log("isLogin",this.state.isLogin)
                    // alert(res.data.message)
                    //   this.setState(res.data[0].c)
                } else {
                    console.log("else", res.status)
                    alert(res.data.message)
                }
            }).catch(err => alert(err.response.data.message))
        }

    }


    render() {
        if (this.state.isLogin) {
            if (this.state.user_type === "Admin")
                return (
                    <Redirect to="/loginscreen-admin" />
                )
            else
                return (
                    <Redirect to="/loginscreen" />
                )
        }
        return (
            <LoginForm handleChange={this.handleChange}
                login={this.login}
                validation={this.validation}
                {...this.state} />
        )
    }
}

export default LoginHandles;