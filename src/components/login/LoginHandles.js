import React, { Component, useState } from 'react';
import { validation } from './validation'
import LoginForm from './LoginForm';
import axios from "axios"
import { Redirect } from "react-router-dom";
import { loginApi, serverApi } from '../constants/constants';

const LoginHandles = () => {
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
            setLoginCred({ ...loginCred, [name] : checked })
            
            :
            setLoginCred({ ...loginCred, [name] : value}) 
    }

    const login = () => {
        const erro = validation(loginCred.email, loginCred.password);
        loginCred.errors = erro

        setLoginCred({...loginCred})
        console.log("cred", loginCred)
        if (!loginCred.errors.isError) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                email: loginCred.email,
                password: loginCred.password,
            }
            axios.post(`${serverApi}${loginApi}`, config).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.data.token)
                    console.log("response", res)
                    console.log("token", res.data.data.token)
                    console.log("id", res.data.data.id)
                    setLoginCred({
                        ...loginCred,
                        isLogin:true,
                        user_type: res.data.data.user_type
                    })
                } else {
                    console.log("else", res.status)
                    alert(res.data.message)
                }
            }).catch(err => alert(err.response.data.message))
        }
    }

    if (loginCred.isLogin) {
        if (loginCred.user_type === "Admin")
            return (
                <Redirect to="/loginscreen-admin" />
            )
        else
            return (
                <Redirect to="/loginscreen" />
            )
    }
    return (
        <LoginForm handleChange={handleChange}
            login={login}
            {...loginCred} />
    )
    // return (<div>
    //     <button onClick={() => { handleChange() }} >submit</button>
    //     <h5>{loginCred.user_type}</h5>
    // </div>)
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