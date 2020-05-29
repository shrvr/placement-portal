import React, { Component, useState } from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
import axios from "axios"
import { registerApi, serverApi } from '../constants/constants';
import { validation } from '../login/validation'

export const Register = () => {

    const [signupCred, setSignupCred] = useState({
        first_name: '',
        last_name: '',
        email: '',
        enroll: '',
        password: '',
        c_password: '',
        isRegister: false,

        isError: false,
        emailError: "",
        passwordError: "",
        c_passwordError: "",
        first_nameError: "",
        last_nameError: "",
        enrollError: ''
        
    })


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            setSignupCred({ ...signupCred, [name]: checked })

            :
            setSignupCred({ ...signupCred, [name]: value })
    }

    const register = () => {
        const err = validation(signupCred.email, signupCred.password, signupCred.c_password, signupCred.first_name, signupCred.last_name, signupCred.enroll);        
        setSignupCred({...signupCred,...err})

        if (!err.isError) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                first_name: signupCred.first_name,
                last_name: signupCred.last_name,
                email: signupCred.email,
                enroll: signupCred.enroll,
                password: signupCred.password,
            }
            axios.post(`${serverApi}${registerApi}`, config).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    setSignupCred({
                        ...signupCred,
                        isRegister: true
                    })
                    alert(res.data.message)
                    //   this.setState(res.data[0].c)
                } else {
                    alert(res.data.message)
                }
            }).catch(err => alert(err.response.data.message))
        }
    }

    if (signupCred.isRegister)
        return (
            <Redirect to="/" />
        )
    return (
        <RegisterForm handleChange={handleChange}
            register={register}
            {...signupCred}
        />
        )
}

export default Register;