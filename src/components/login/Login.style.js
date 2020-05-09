import styled from "styled-components"
import { greenColor, whiteColor } from "../constants/constants"

export const LoginFormWrapper=styled.div`
.login-form{
    max-width:330px;
    padding:15px;
    margin: auto auto;
    box-shadow: 0 4px 8px 0 rgba(1,162,129,0.2);
    font-size:10pt;
    background-color:${whiteColor};
    
}

.login-form Input{ 
    background-color:${whiteColor};
}

.login-form Label{
    margin-bottom:0px;
    margin-top:4px;
}

.card-login{
    margin-top: 3cm;
}

.card-register{
    margin-top: 1cm;
}

.login-background-style{
    height: 100vh;
    width:100%;
    background-color:${whiteColor};
    backdround-size:cover;
}

.h-117{
    height: 117vh;
}

.bttn{
    width: 100%;
    max-width:330px;
    padding:5px;
    margin:auto;
    margin-top:20px;
    background-color:${greenColor};
}

`