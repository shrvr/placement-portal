import React from "react"
import { MainNavbarWrapper } from "./MainNavbar.style"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";

const MainNavbar = props => {
    const location = useLocation();

    return (
        <div>
            <MainNavbarWrapper>
                <Navbar className="main-navbar-style" light expand="md">
                    <NavbarBrand className="navbrand-style">
                        {props.title}
                    </NavbarBrand>
                    {location.pathname === "/placement-portal/loginscreen/placement-drives" ?
                        <Nav className="ml-auto filter-style" navbar>
                            <NavItem onClick={props.toggleFilter}>
                                <FontAwesomeIcon icon={faFilter} className="mr-1" />Filter
                        </NavItem>
                        </Nav>
                        :
                        <div></div>
                    }
                    {location.pathname === "/placement-portal/loginscreen/profile" ?
                        <Nav className="ml-auto filter-style" navbar>
                            <NavItem  >
                                <NavLink id="edit-profile" tag={Link} to="/placement-portal/loginscreen/edit-profile">
                                    <FontAwesomeIcon icon={faEdit} className="mr-1" />Edit Profile
                                </NavLink>
                            </NavItem>
                        </Nav>
                        :
                        <div></div>
                    }
                </Navbar>
            </MainNavbarWrapper>
        </div>
    )
}

export default MainNavbar;