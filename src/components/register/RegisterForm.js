import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Input, Label, FormFeedback, Card } from 'reactstrap'
import { LoginFormWrapper } from '../login/Login.style';
import Login_NavBar from '../login/Login_NavBar';

const RegisterForm = props => {
    console.log("props_reg",props)
    return (
        <div>
            <LoginFormWrapper>
                <div className="login-background-style h-117" >
                    <Login_NavBar />
                    <div>
                        <Card className="login-form card-register">
                            <h4 className="text-center"><b>REGISTER</b></h4>
                            <div >
                                <Label >Firstname</Label>
                                <Input
                                    name='first_name'
                                    type='text'
                                    value={props.first_name}
                                    // onBlur={props.validation}
                                    invalid={props.first_nameError}
                                    placeholder="Enter Firstname"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.first_nameError}</FormFeedback>
                            </div>
                            <div >
                                <Label>Lastname</Label>
                                <Input
                                    name='last_name'
                                    type='text'
                                    value={props.last_name}
                                    // onBlur={props.validation}
                                    invalid={props.last_nameError}
                                    placeholder="Enter Lastname"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.last_nameError}</FormFeedback>
                            </div>
                            <div >
                                <Label >Email</Label>
                                <Input
                                    name='email'
                                    type='text'
                                    value={props.email}
                                    // onBlur={props.validation}
                                    invalid={props.emailError}
                                    placeholder="Enter Email"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.emailError}</FormFeedback>
                            </div>
                            <div >
                                <Label>Enrollment number</Label>
                                <Input
                                    name='enroll'
                                    type='text'
                                    value={props.enroll}
                                    // onBlur={props.validation}
                                    invalid={props.enrollError}
                                    placeholder="Enter Enrollment Number"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.enrollError}</FormFeedback>
                            </div>

                            <div >
                                <Label>Password</Label>
                                <Input
                                    name='password'
                                    type='password'
                                    value={props.password}
                                    // onBlur={props.validation}
                                    invalid={props.passwordError}
                                    placeholder="Enter Password"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.passwordError}</FormFeedback>
                            </div>
                            <div >
                                <Label>Confirm Password</Label>
                                <Input
                                    name='c_password'
                                    type='password'
                                    value={props.c_password}
                                    // onBlur={props.validation}
                                    invalid={props.c_passwordError}
                                    placeholder="Confirm Password"
                                    onChange={props.handleChange}
                                />
                                <FormFeedback>{props.c_passwordError}</FormFeedback>
                            </div>
                            <div>
                                <Button
                                    className='bttn'
                                    onClick={props.register} >
                                    Register
                            </Button>
                            </div>
                            <div className="text-center">
                                <Link to="/placement-portal">
                                    Log In
                                </Link>
                                <span className="p-2">|</span>
                                <Link to="/placement-portal/fpassword">
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

export default RegisterForm;