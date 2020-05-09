import React from 'react';
import {
    Redirect
} from "react-router-dom";

function Login_Protected(props) {
    const Target = props.Target
    var token = localStorage.getItem('token')
    return <div>{token ? <Target/> : <Redirect to ="/" />}</div>
}

export default Login_Protected;