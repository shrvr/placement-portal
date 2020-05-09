import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faList, faChartPie, faUserTie, faBriefcase, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav, Navbar } from 'reactstrap';
import { SideBarWrapper } from "./SideBar.style";
import { Link, useRouteMatch } from 'react-router-dom';

import Logo from "../../images/ldrp_logo.png";

const SideBar = () => {
  let match=useRouteMatch();
  return (
    <div>
      <SideBarWrapper>
        <div className="background-style">
          <div className="sidebar-header">
            <Navbar className="clgLogo-background">
              <img src={Logo} alt="loading" height="50" width="50" />
            </Navbar>
            <div className="text-left ">
              <Nav vertical className="list-unstyled pb-3">

                <NavItem >
                  <NavLink className="menu-navlink-style"> 
                    <FontAwesomeIcon icon={faBars} className="mr-2" />MENU
                  </NavLink>
                </NavItem >
          
                <NavItem>
                  <NavLink className="navlink-style" tag={Link} to={`${match.url}`}>
                    <FontAwesomeIcon icon={faChartPie} className="mr-2" />Dashboard
                  </NavLink>
                </NavItem >

                <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={`${match.url}/placement-drives`}>
                    <FontAwesomeIcon icon={faUserTie} className="mr-2" />Placement Drives
                  </NavLink>
                </NavItem >

                <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={`${match.url}/add-drive`}>
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />Add Drive
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={`${match.url}/student-log`}>
                    <FontAwesomeIcon icon={faDatabase} className="mr-2" />Student Log
                  </NavLink>
                </NavItem>

              </Nav>
            </div>
          </div>
        </div>
      </SideBarWrapper>
    </div>
  );
};

export default SideBar;
