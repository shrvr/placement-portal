import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
    
    render() {
        return (
            <div className="App">
                <br />
                <div>
                    Email:
                    <input
                        name='email'
                        type='text'
                        // value={props.email}
                        placeholder="Email"
                    // onChange={props.handleChange}
                    />
                    <button  >Get OTP</button>
                </div>
                <br />
                <div>
                    Enter OTP:
                    <input
                        name='otp'
                        type='text'
                        maxLength="41"
                        // value={props.email}
                        placeholder="Enter 6 digit OTP"
                    // onChange={props.handleChange}
                    />
                    <button  >Submit</button>
                </div>
                <br />
                <div>
                    <Link to="/placement-portal">
                        Login
                    </Link>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;