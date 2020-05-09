import React, { useState, useEffect } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Popover,
  PopoverBody,
  Tooltip,
  Badge,
  Modal,
  ModalFooter,
  ModalBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import axios from "axios"
import { NavBarWrapper } from "./NavBar.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import Avatar from "react-avatar";
import { whiteColor, greenColor, userById, serverApi } from "../../constants/constants";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const doogle = () => setPopoverOpen(!popoverOpen);
  const toggle = () => setIsOpen(!isOpen);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  const [isOpenModal, setisOpenModal] = useState(false);
  const toggleModal = () => setisOpenModal(!isOpenModal);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const [first_name,setFirstName]=useState("");
  const [last_name,setLastName]=useState("");

  let token=localStorage.getItem("token")
  useEffect(() => {

    axios.defaults.headers.common = { 'api_key': `${token}` }
    axios.post(`${serverApi}${userById}`, axios.defaults.headers.common).then(res => {
        console.log(res)
        if (res.status === 200) {
            console.log("response", res)
            setFirstName(res.data.data.first_name)
            setLastName(res.data.data.last_name)
        } else {
            console.log("else", res.status)
            alert(res.data.message)
        }
    }).catch(err => alert(err.response.data.message))

}, [first_name,last_name])
  return (
    <div>
      <NavBarWrapper>

        {/* //Navbar */}

        <Navbar light expand="md" className="background-style">
          <NavbarBrand><div className="header-style"><b>LDRP</b> PLACEMENT PORTAL</div></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <div>
                <NavItem  >
                  <NavLink className="navlink-style">
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size="sm">
                      <DropdownToggle
                        style={{
                          backgroundColor: greenColor,
                          border: greenColor,
                          padding: "0"
                        }} caret>
                        <Avatar
                          name={`${first_name} ${last_name}`}
                          round={true}
                          size={30}
                          color={whiteColor}
                          fgColor="black"
                        />{'  '}
                        <small>welcome, {first_name}</small>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-style">
                        <Link to="/loginscreen/profile"
                          style={{ textDecoration: "none" }}
                        >
                          <DropdownItem className="dropdown-item">Profile</DropdownItem>
                        </Link>
                        <Link to="/"
                          style={{ textDecoration: "none" }}
                        >
                          <DropdownItem className="dropdown-item">Change Password</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </NavLink>
                </NavItem>
              </div>

              <NavItem >
                <NavLink className="navlink-style" onClick={doogle}>
                  <FontAwesomeIcon id="Noti-Popover" icon={faBell} />
                  <sup><Badge pill color="danger">3</Badge></sup>
                </NavLink>
              </NavItem>

              <NavItem className="mr-5">
                <NavLink className="navlink-style" onClick={toggleModal}>
                  <FontAwesomeIcon id="logoutTooltip" icon={faPowerOff} />
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>



        {/* // Modal */}

        <Modal isOpen={isOpenModal} toggle={toggleModal}>
          <ModalBody style={{ backgroundColor: whiteColor }}>
            Do you want to logout?
          </ModalBody>
          <ModalFooter style={{ backgroundColor: whiteColor }}>
            <Button style={{ backgroundColor: greenColor }} size="sm" onClick={props.logout}>Yes</Button>{' '}
            <Button color="secondary" size="sm" onClick={toggleModal}>No</Button>
          </ModalFooter>
        </Modal>

        {/* // Tooltip */}

        <Tooltip placement="bottom" isOpen={tooltipOpen} target="logoutTooltip" toggle={toggleTooltip}>
          Logout
        </Tooltip>

        {/* //popover */}

        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="Noti-Popover"
          toogle={doogle}
          trigger="hover"
        >
          {/* <PopoverHeader className="font-weight-bold">
            Notifications
          </PopoverHeader> */}
          <PopoverBody>
            <div className="popover-style">
              <div>Notification-1</div>
            </div>
            <div className="popover-style">
              <div>Notification-2</div>
            </div>
            <div className="popover-style">
              <div>Notification-3</div>
            </div>
          </PopoverBody>
        </Popover>

      </NavBarWrapper>
    </div>
  );
};

export default NavBar;
