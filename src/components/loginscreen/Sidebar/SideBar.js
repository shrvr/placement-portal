import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBars, faList, faChartPie, faComment, faUserEdit, faUserTie} from '@fortawesome/free-solid-svg-icons';
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

                {/* <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={'/'}>
                    <FontAwesomeIcon icon={faList} className="mr-2" />List of Application
                  </NavLink>
                </NavItem>

                <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={'/'}>
                    <FontAwesomeIcon icon={faUserEdit} className="mr-2" />TPO Updates
                  </NavLink>
                </NavItem> */}

                <NavItem >
                  <NavLink className="navlink-style" tag={Link} to={'/'}>
                    <FontAwesomeIcon icon={faComment} className="mr-2" />FeedBack
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="navlink-style" tag={Link} to={`${match.url}/contact-us`}>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Contact Us
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
