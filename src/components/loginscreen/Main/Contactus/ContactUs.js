import React from 'react';
import MainNavbar from '../MainNavbar';
import { Card, CardHeader, CardFooter, Table, Row, Col } from 'reactstrap';
import Avatar from "react-avatar";
import { whiteColor, greenColor } from '../../../constants/constants';
import { ContactusWrapper } from './ContactUs.style';
import { contactArray } from './contactArray';


const ContactUs = () => {
    return (
        <div>
            <ContactusWrapper>
                <MainNavbar title="Contact Us" />
                <Row>
                    {contactArray.map((props) => {
                        return (
                            <Col sm='20' className="m-3 ml-4">
                                <Card className='contactus-card'>
                                    <CardHeader>
                                        <center>
                                            <Avatar
                                                className='avatar'
                                                name={props.name}
                                                round={true}
                                                size={150}
                                                color={whiteColor}
                                                fgColor="black"
                                            /><br />
                                            <p>{props.post}</p>
                                        </center>
                                    </CardHeader>
                                    <CardFooter>
                                        <Table borderless className='table-style' >
                                            <tbody>
                                                <tr>
                                                    <th>Name:</th>
                                                    <td>{props.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Email:</th>
                                                    <td>{props.email}</td>
                                                </tr>
                                                <tr>
                                                    <th>Mobile:</th>
                                                    <td>{props.mobile}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </CardFooter>
                                </Card>
                            </Col>
                        );
                    }
                    )}
                </Row>
            </ContactusWrapper>
        </div>

    );
};

export default ContactUs;