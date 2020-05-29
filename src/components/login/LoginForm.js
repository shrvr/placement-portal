import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Label, FormFeedback, Card } from 'reactstrap'
import { LoginFormWrapper } from './Login.style'
import Login_NavBar from './Login_NavBar'

const LoginForm = (props) => {
    return (
        <div>
            <LoginFormWrapper >
                <div className="login-background-style">
                    <Login_NavBar />
                    <div>
                        <Card className="login-form card-login">
                            <h4 className="text-center"><b>LOGIN</b></h4>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    name='email'
                                    type='email'
                                    value={props.email}
                                    invalid={props.emailError}
                                    placeholder="Email"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.errors.emailError}</FormFeedback>
                            </div>
                            <div >
                                <Label>Password</Label>
                                <Input
                                    name='password'
                                    type='password'
                                    value={props.password}
                                    invalid={props.passwordError}
                                    placeholder="Password"
                                    onChange={props.handleChange} />
                                <FormFeedback>{props.errors.passwordError}</FormFeedback>
                            </div>
                            <div>
                                <Button
                                    className="bttn"
                                    onClick={props.login} >
                                    Login
                            </Button>
                            </div>
                            <div className="text-center">
                                <Link to="/register">
                                    Sign Up
                                </Link>
                                <span className="p-2">|</span>
                                <Link to="/fpassword">
                                    Forgot password
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </LoginFormWrapper>
        </div>

    )
}
export default LoginForm;