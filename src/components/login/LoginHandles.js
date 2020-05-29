import React, { Component, useState } from 'react';
import { validation } from './validation'
import LoginForm from './LoginForm';
import axios from "axios"
import { Redirect } from "react-router-dom";
import { loginApi, serverApi } from '../constants/constants';

const LoginHandles = () => {
    // constructor() {
    //     super()
    //     this.state = {
    //         email: '',
    //         password: '',
    //         isLogin: false,
    //         user_type: '',
    //         errors:{
    //             isError: false,
    //             emailError: "",
    //             passwordError: ""}
    //     }    
    // }
    const [loginCred, setLoginCred] = useState({
        email: '',
        password: '',
        isLogin: false,
        user_type: '',
        errors: {
            isError: false,
            emailError: "",
            passwordError: ""
        }
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
        loginCred.user_type = "dffd"
        setLoginCred({ ...loginCred })
    }

    // handleChange = (event) => {
    //     const { name, value, type, checked } = event.target
    //     type === "checkbox" ?
    //         this.setState({
    //             [name]: checked
    //         })
    //         :
    //         this.setState({
    //             [name]: value
    //         })
    // }

    // login = () => {
    //     const err = validation(this.state.email, this.state.password, this.state.errors);
    //     this.state.errors = err

    //     this.setState({
    //         ...this.state.errors
    //     })

    //     if (!this.state.errors.isError) {
    //         const config = {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             email: this.state.email,
    //             password: this.state.password,
    //         }
    //         axios.post(`${serverApi}${loginApi}`, config).then(res => {
    //             console.log(res.status)
    //             if (res.status === 200) {
    //                 localStorage.setItem("token", res.data.data.token)
    //                 console.log("response", res)
    //                 console.log("token", res.data.data.token)
    //                 console.log("id", res.data.data.id)

    //                 this.setState({
    //                     isLogin: true,
    //                     user_type: res.data.data.user_type
    //                 })
    //             } else {
    //                 console.log("else", res.status)
    //                 alert(res.data.message)
    //             }
    //         }).catch(err => alert(err.response.data.message))
    //     }
    // }
    return (<div>
        <button onClick={() => { handleChange() }} >submit</button>
        <h5>{loginCred.user_type}</h5>
        </div>)
    // render() {
    //     if (this.state.isLogin) {
    //         if (this.state.user_type === "Admin")
    //             return (
    //                 <Redirect to="/loginscreen-admin" />
    //             )
    //         else
    //             return (
    //                 <Redirect to="/loginscreen" />
    //             )
    //     }
    //     return (
    //         <LoginForm handleChange={this.handleChange}
    //             login={this.login}
    //             {...this.state} />
    //     )
    // }
}

export default LoginHandles;