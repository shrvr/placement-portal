import React from 'react';
import {
    Redirect
} from "react-router-dom";

function Protected(props) {
    const Target = props.Target
    var token = localStorage.getItem('token')
    return <div>{token ? <Redirect to ="/loginscreen" /> : <Target />}</div>
}

export default Protected;