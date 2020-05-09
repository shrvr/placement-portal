import React from "react"
import {
    Navbar,
    NavbarBrand } from "reactstrap";
import { NavBarWrapper } from "../loginscreen/NavBar.style.js";
import Logo from "../images/ldrp_logo.png"
const Login_NavBar = () => {
    return (
        <NavBarWrapper>
        <Navbar light expand="md" className="background-style">
        <img src={Logo} alt="loading" className="clgLogo" height="50" width="50"/>
            <NavbarBrand><div className="header-style"><b>LDRP</b> PLACEMENT PORTAL</div></NavbarBrand> 
        </Navbar>
        </NavBarWrapper>
    )
}
export default Login_NavBar