import React, { useState } from "react";
import NavBar from "./Navbar/NavBar";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";
import { LoginScreenWrapper } from "./LoginScreen.style";
import { Redirect } from "react-router-dom";

const LoginScreen = () => {
  const [isLogout, setisLogout] = useState(false);
  const logout = () => {
    localStorage.removeItem("token")
    setisLogout(true);
  }
  if (isLogout)
    return(<Redirect to="/"/>)
  else
      return (
      <div>
        <LoginScreenWrapper>
          <div className="sidebar-style">
            <div>
              <SideBar />
            </div>
            <div>
              <NavBar logout={logout} />
              <Main />
            </div>
          </div>
        </LoginScreenWrapper>
      </div>
      );
  };
  
  export default LoginScreen;
