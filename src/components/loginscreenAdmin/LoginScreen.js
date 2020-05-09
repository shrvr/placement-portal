import React, { useState } from "react";
import NavBar from "./Navbar/NavBar";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";

import { Redirect } from "react-router-dom";
import { LoginScreenAdminWrapper } from "./LoginScreen.style";

const LoginScreenAdmin = () => {
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
        <LoginScreenAdminWrapper>
          <div className="sidebar-style">
            <div>
              <SideBar />
            </div>
            <div>
              <NavBar logout={logout} />
              <Main />
            </div>
          </div>
        </LoginScreenAdminWrapper>
      </div>
      );
  };
  
  export default LoginScreenAdmin;
