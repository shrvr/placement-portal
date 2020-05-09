import React, { useState, useEffect } from 'react';
import MainNavbar from '../MainNavbar';
import { ProfileWrapper } from '../Profile/Profile.style';
import { Card, CardHeader, CardBody, Row, Col, Table, Input, CardFooter, Button, ButtonGroup, Modal, ModalBody, ModalFooter } from "reactstrap";
import Avatar from "react-avatar";
import axios from "axios";
import { serverApi, editProfile, userById, viewProfile, greenColor } from '../../../constants/constants';

const EditProfile = () => {
    let token = localStorage.getItem("token");

    const [fullName, setFullName] = useState("");
    const [enrollment, setEnroll] = useState("");
    const [department, setDepartment] = useState("");
    const [pYear, setpYear] = useState("");
    const handleSubmit = () => {

        axios.defaults.headers.common = {
            "Content-Type": "application/json",
            "api_key": `${token}`
        }
        const data = {
            backlog: backlog,
            mobile_number: mobile,
            cpi: cpi,
            percentage_10th: tenth,
            percentage_12th: twelve,
            placed_status: status,
        }
        axios.post(`${serverApi}${editProfile}`, data, axios.defaults.headers.common).then(res => {
            console.log(res.status)
            if (res.status === 200) {
                // localStorage.setItem("token", res.data.data.token)
                console.log("response", res)
                setEditSucced(true)

            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))
    }

    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState(false)
    const [company, setCompany] = useState("")
    const [tenth, setTenth] = useState(0)
    const [twelve, setTwelve] = useState(0)
    const [cpi, setCpi] = useState("")
    const [backlog, setBacklog] = useState("")
    const [edit_succed, setEditSucced] = useState(false)


    useEffect(() => {

        axios.defaults.headers.common = { 'api_key': `${token}` }
        axios.post(`${serverApi}${userById}`, axios.defaults.headers.common).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log("response", res)
                setFullName(`${res.data.data.first_name} ${res.data.data.last_name}`)
                setEnroll(res.data.data.enroll)
                setDepartment(res.data.data.department)
                setpYear(res.data.data.batch)
                setEmail(res.data.data.email)
            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))


        axios.post(`${serverApi}${viewProfile}`, axios.defaults.headers.common).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log("response", res)
                setMobile(res.data.data.mobile_number)
                setStatus(res.data.data.placed_status)
                setTenth(res.data.data.percentage_10th)
                setTwelve(res.data.data.percentage_12th)
                setCpi(res.data.data.cpi)
                setBacklog(res.data.data.backlog)
            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))



    }, [])

    return (
        <div>
            <ProfileWrapper>
                <MainNavbar title="Edit Profile" />

                <Card className="card-profile">
                    <CardHeader className="card-profile-header">
                        <strong>Personal Details</strong>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <div>
                                    <Avatar
                                        width={390}
                                        height={295}
                                        // round={true}
                                        // src={Logo}
                                        style={{
                                            marginLeft: "50px",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Table borderless className="table-profile">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{fullName}</td>
                                            </tr>
                                            <tr>
                                                <th>Enrollment No.</th>
                                                <td>{enrollment}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>{department}</td>
                                            </tr>
                                            <tr>
                                                <th>Passing year</th>
                                                <td>{pYear}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Table borderless className="table-profile">
                                        <tbody>
                                            <tr id="rawHeader">
                                                <td>Contact Info</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Mobile No.</th>
                                                <td ><Row>
                                                    +91 <Input type="text"
                                                        maxLength="10"
                                                        size="sm"
                                                        value={mobile}
                                                        onChange={(e) => { setMobile(e.target.value) }}
                                                        className="edit-input-style"
                                                    />

                                                </Row>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Email-id</th>
                                                <td>
                                                    <Input type="text"
                                                        size="sm"
                                                        id="input-long"
                                                        value={email}

                                                        onChange={(e) => { setEmail(e.target.value) }}
                                                        className="edit-input-style"
                                                    />
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <th>Address</th>
                                                <td>
                                                    <Input type="text"
                                                        size="sm"
                                                        id="input-long"
                                                        className="edit-input-style"
                                                    />
                                                    <Input type="text"
                                                        size="sm"
                                                        id="input-long"
                                                        className="edit-input-style"
                                                    />
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </div>
                                <div>
                                    <Table borderless className="table-profile">
                                        <tbody>
                                            <tr id="rawHeader">
                                                <td>Placement Info</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>
                                                    <ButtonGroup>
                                                        <Button className="checkBox-btn" size="sm" onClick={() => setStatus(true)} active={status === true}>Placed</Button>
                                                        <Button className="checkBox-btn" size="sm" onClick={() => setStatus(false)} active={status === false}>UnPlaced</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Company</th>
                                                <td>
                                                    <Input type="text"
                                                        size="sm"
                                                        onChange={(e) => { setCompany(e.target.value) }}
                                                        value={company}
                                                        className="edit-input-style"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>

                </Card>

                <Card className="card-profile">
                    <CardHeader className="card-profile-header">
                        <strong>Educational Details</strong>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <Table borderless className="table-profile" id="eduTable">
                                <tbody>
                                    <tr id="rawHeader">
                                        <td>School Education</td>
                                        <td></td>
                                        <td></td>


                                    </tr>
                                    <tr>
                                        <th>Std.</th>
                                        <th>Percentages</th>

                                    </tr>
                                    <tr>
                                        <td>10th (%)</td>
                                        <td>
                                            <Input type="text"
                                                size="sm"
                                                onChange={(e) => { setTenth(e.target.value) }}
                                                value={tenth}

                                            // className="edit-input-style"
                                            />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>12th (%)</td>
                                        <td>
                                            <Input type="text"
                                                size="sm"
                                                onChange={(e) => { setTwelve(e.target.value) }}
                                                value={twelve}
                                            // className="edit-input-style"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div>
                            <Table borderless className="table-profile" id="eduTable">
                                <tbody>
                                    <tr id="rawHeader">
                                        <td>B.E.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <th>CPI</th>
                                        <td> <Input type="text"
                                            size="sm"
                                            className="edit-input-style"
                                            onChange={(e) => { setCpi(e.target.value) }}
                                            value={cpi}

                                        /></td>
                                    </tr>
                                    <tr>
                                        <th>Backlogs</th>
                                        <td> <Input type="text"
                                            size="sm"
                                            onChange={(e) => { setBacklog(e.target.value) }}
                                            value={backlog}
                                            className="edit-input-style"
                                        /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>

                    <CardFooter>
                        <Button size="sm" className='bttn-save' onClick={handleSubmit}>Save</Button>
                    </CardFooter>
                </Card>

                <Modal isOpen={edit_succed}>
                    <ModalBody size='sm'>
                        Successfully Saved
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: greenColor }} size="sm" className='bttn-save' onClick={()=>{setEditSucced(false)}}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </ProfileWrapper>

        </div>
    );
};

// import axios from "axios";
// import { BaseUrl } from "../helper/enviroment";
// import Headers from "./Header";

// export default class AdminServices {
//   static changepassword(params) {
//     Headers.setHeaders();
//     return axios.put(`${BaseUrl}/admin/changepassword`, params);
//   }

//   static update(params) {
//     Headers.setHeaders();
//     return axios.put(`${BaseUrl}/admin/update`, params);
//   }

//   static logout() {
//     Headers.setHeaders();
//     return axios.delete(`${BaseUrl}/admin/logout`);
//   }
// }

// import { store } from "../redux/store";
// import axios from "axios";

// class Headers {
//   static setHeaders = () => {
//     axios.defaults.headers.common[
//       "access-token"
//     ] = store.getState().auth.accessToken;
//   };
// }

// export default Headers;

export default EditProfile;