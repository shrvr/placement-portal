import React from "react"
import { MainNavbarWrapper } from "./MainNavbar.style"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faEdit, faSearch } from "@fortawesome/free-solid-svg-icons";
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
                    {location.pathname === "/loginscreen-admin/placement-drives" ?
                        <Nav className="ml-auto filter-style" navbar>
                            <NavItem onClick={props.toggleFilter}>
                                <FontAwesomeIcon icon={faFilter} className="mr-1" />Filter
                        </NavItem>
                        </Nav>
                        :
                        <div></div>
                    }
                    {location.pathname === "/loginscreen-admin/profile" ?
                        <Nav className="ml-auto filter-style" navbar>
                            <NavItem  >
                                <NavLink id="edit-profile" tag={Link} to="/loginscreen-admin/edit-profile">
                                    <FontAwesomeIcon icon={faEdit} className="mr-1" />Edit Profile
                                </NavLink>
                            </NavItem>
                        </Nav>
                        :
                        <div></div>
                    }
                    {location.pathname === "/loginscreen-admin/student-log" ?
                        <Nav className="ml-auto filter-style" navbar>
                            <NavItem onClick={props.toggleFilter}>
                                <div className='search-container'>
                                    <Input size='sm' placeholder='Search' name='search' />
                                    <Button size='sm'><FontAwesomeIcon icon={faSearch} className="mr-1" /></Button>
                                </div>
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