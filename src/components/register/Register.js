import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
import axios from "axios"
import { registerApi, serverApi } from '../constants/constants';
import { validation } from '../login/validation'
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
            isRegister: false,
            errors: {
                isError: false,
                emailError: "",
                passwordError: "",
                c_passwordError: "",
                first_nameError: "",
                last_nameError: "",
                enrollError: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
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

    register() {
        const err = validation(this.state.email, this.state.password, this.state.c_password, this.state.first_name, this.state.last_name, this.state.enroll);
        this.state.errors = err

        this.setState({
            ...this.state.errors
        })

        if (!this.state.errors.isError) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                enroll: this.state.enroll,
                password: this.state.password,
            }
            axios.post(`${serverApi}${registerApi}`, config).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    this.setState({ isRegister: true })
                    alert(res.data.message)
                    //   this.setState(res.data[0].c)
                } else {
                    alert(res.data.message)
                }
            }).catch(err => alert(err.response.data.message))
        }
    }

    render() {
        if (this.state.isRegister)
            return (
                <Redirect to="/" />
            )
        return (
            <RegisterForm handleChange={this.handleChange}
                register={this.register}
                {...this.state}
            />
        )
    }
}

export default Register;