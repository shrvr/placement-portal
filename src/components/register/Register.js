import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
import axios from "axios"
import { registerApi, serverApi } from '../constants/constants';

class Register extends Component {
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            enroll: '',
            password: '',
            c_password: '',
            isRegister: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.validation = this.validation.bind(this)
        this.register = this.register.bind(this)

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
        let isError = false;
        const errors = {
            first_nameError: "",
            last_nameError: "",
            emailError: "",
            enrollError: '',
            passwordError: "",
            c_passwordError: ""
        };

        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this.state.first_name === "") {
            isError = true;
            errors.first_nameError = "Please Enter First name";
        }
        if (this.state.last_name === "") {
            isError = true;
            errors.last_nameError = "Please Enter Last name";
        }
        if (this.state.email === "") {
            isError = true;
            errors.emailError = "Please Enter email";
        }
        else {
            if (!emailRex.test(this.state.email)) {
                isError = true;
                console.log("isError", isError)
                errors.emailError = "Requires valid email";
            }

        }
        if (this.state.enroll === "") {
            isError = true;
            errors.enrollError = "Please Enter Enrollment number";
        }

        if (this.state.password === "") {
            isError = true;
            errors.passwordError = "Please Enter Password";
        } else {
            if (this.state.password !== this.state.c_password) {
                isError = true;
                errors.passwordError = "Passwords does not match";
            }
        }
        if (this.state.c_password === "") {
            isError = true;
            errors.c_passwordError = "Please Enter Password";
        } else {
            if (this.state.password !== this.state.c_password) {
                isError = true;
                errors.c_passwordError = "Passwords does not match";
            }

        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    register() {
        const err = this.validation();
        // if (!err) {
        //     this.setState({ isRegister: 1 })
        //     alert("Registration succesfull")
        // }


        if (!err) {
            const config ={
                        headers:{
                            "Content-Type": "application/json",
                        },
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            enroll: this.state.enroll,
            password: this.state.password,
            }
                axios.post(`${serverApi}${registerApi}`,config).then(res =>{
                    console.log(res.status)
                    if(res.status===200){
                        this.setState({ isRegister: true })
                        alert(res.data.message)
                 //   this.setState(res.data[0].c)
                    }else{
                        alert(res.data.message)
                    }
                }).catch(err => alert(err.response.data.message))
        }
    }

    render() {
        if(this.state.isRegister)
            return(
                <Redirect to="/" />
            )
        return (
            <RegisterForm handleChange={this.handleChange}
                register={this.register}
                validation={this.validation} 
                {...this.state}
            />
        )
    }
}

export default Register;