import React, { useState, useEffect } from "react";
import MainNavbar from "../MainNavbar";
import { ProfileWrapper } from "./Profile.style";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import Avatar from "react-avatar";
import { viewProfile, serverApi, userById, whiteColor, greenColor } from "../../../constants/constants";
import axios from "axios";

// import Logo from "../../../images/ldrp_logo.png"

const Profile = () => {
    // const[array,setArray]=useState(["shurvir","1653465313","ce"]);
    const [fullName, setFullName] = useState("");
    const [enrollment, setEnrollment] = useState("")
    const [department, setDepartment] = useState("");
    const [pYear, setpYear] = useState("")

    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState()
    const [company, setCompany] = useState("")
    const [tenth, setTenth] = useState(0)
    const [twelve, setTwelve] = useState(0)

    const [cpi, setCpi] = useState("")
    const [backlog, setBacklog] = useState("")

    let token = localStorage.getItem("token")

    useEffect(() => {
        axios.defaults.headers.common = {
            "Content-Type": "application/json",
            "api_key": `${token}`
        }

        axios.post(`${serverApi}${userById}`, axios.defaults.headers.common).then(res => {
            console.log(res.status)
            if (res.status === 200) {
                setFullName(`${res.data.data.first_name} ${res.data.data.last_name}`)
                setEnrollment(res.data.data.enroll)
                setDepartment(res.data.data.department)
                setpYear(res.data.data.batch)
                setEmail(res.data.data.email)
            } else {
                console.log("else", res.status)       
            }
        }).catch(err => alert(err.response.data.message))
        
        axios.post(`${serverApi}${viewProfile}`, axios.defaults.headers.common).then(res => {
            console.log(res.status)
            if (res.status === 200) {
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
        <ProfileWrapper>
            <MainNavbar title="Profile" />
            <Card className="card-profile">
                <CardHeader className="card-profile-header">
                    <strong>Personal Details</strong>
                    {/* {array}<button onClick={()=>{setArray([name,enrollment,department])}}>change</button> */}
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <div>
                                <Avatar
                                    name={fullName}
                                    color={whiteColor}
                                    fgColor={greenColor}
                                    round={true}
                                    size='120'
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
                                            <td>+91 {mobile}</td>
                                        </tr>
                                        <tr>
                                            <th>Email-id</th>
                                            <td>{email}</td>
                                        </tr>
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
                                            <td>{status?"PLACED":"UNPLACED"}</td>
                                        </tr>
                                        <tr>
                                            <th>Company</th>
                                            <td>{company}</td>
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
                                    <td></td>

                                </tr>
                                <tr>
                                    <th>Std.</th>
                                    <th>Percentages</th>

                                </tr>
                                <tr>
                                    <td>10th</td>
                                    <td><span>{tenth}</span> %</td>

                                </tr>
                                <tr>
                                    <td>12th</td>
                                    <td><span>{twelve}</span> %</td>
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
                                    <td>{cpi}</td>
                                </tr>
                                <tr>
                                    <th>Backlogs</th>
                                    <td>{backlog}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>

        </ProfileWrapper>
    )
}
export default Profile;
