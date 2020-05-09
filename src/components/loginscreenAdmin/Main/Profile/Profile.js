import React from "react";
import MainNavbar from "../MainNavbar";
import { ProfileWrapper } from "./Profile.style";
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";
import Avatar from "react-avatar";
// import Logo from "../../../images/ldrp_logo.png"

const Profile = () => {
    return (
        <ProfileWrapper>
            <MainNavbar title="Profile" />
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
                                            <td>TPO</td>
                                        </tr>
                                        <tr>
                                            <th>Reg. No.</th>
                                            <td>213168541</td>
                                        </tr>
                                        <tr>
                                            <th>College</th>
                                            <td>LDRP</td>
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
                                            <td>+91 8000671044</td>
                                        </tr>
                                        <tr>
                                            <th>Email-id</th>
                                            <td>shurvir104@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>fsda vavbvvsfdffvbvzvxcvvvz</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </ProfileWrapper>
    )
}
export default Profile;
