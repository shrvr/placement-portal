import React from 'react';
import MainNavbar from '../MainNavbar';
import { ProfileWrapper } from '../Profile/Profile.style';
import { Card, CardHeader, CardBody, Row, Col, Table, Input, CardFooter, Button } from "reactstrap";
import Avatar from "react-avatar";
const EditProfile = () => {

    // useEffect(() => {

    //     axios.defaults.headers.common = { 'api_key': `${token}` }
    //     axios.post(`${serverApi}${userById}`, axios.defaults.headers.common).then(res => {
    //         console.log(res)
    //         if (res.status === 200) {
    //             console.log("response", res)
    //             setFullName(`${res.data.data.first_name} ${res.data.data.last_name}`)
    //             setEnroll(res.data.data.enroll)
    //             setDepartment(res.data.data.department)
    //             setpYear(res.data.data.batch)
    //         } else {
    //             console.log("else", res.status)
    //             alert(res.data.message)
    //         }
    //     }).catch(err => alert(err.response.data.message))

    // }, [])

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
                                                <td>TPO</td>
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
                                                <td ><Row>
                                                    +91 <Input type="text"
                                                        maxLength="10"
                                                        size="sm"
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
                                                        className="edit-input-style"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
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
                                                <td>PLACED</td>
                                            </tr>
                                            <tr>
                                                <th>Company</th>
                                                <td>Capgemini</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
                        <Button size="sm">Save</Button>{' '}
                        <Button size="sm">Cancel</Button>
                    </CardFooter>
                </Card>
            </ProfileWrapper>
        </div>
    );
};

export default EditProfile;