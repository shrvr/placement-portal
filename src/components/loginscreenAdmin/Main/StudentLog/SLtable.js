import React from 'react';
import { Table, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import { tableArray } from './tableArray'
// import { greenColor, whiteColor,serverApi,campusDriveApi, getDriveById  } from '../../../../constants/constants';
import { PDtableWrapper } from '../PlacementDrives/PDtable/PDtable.style';

// import axios from "axios";
const SLtable = (props) => {
    let rowNumber = 1;

    return (
        <div>
            <PDtableWrapper>
                <Table className="table-style">
                    <thead >
                        <tr>
                            <th>#</th>
                            {/* <th>Student Name</th> */}
                            <th>Enrl No.</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>CGPA</th>
                            <th>Email id</th>
                            <th>Contact no</th>
                            <th>Status</th>
                            <th>Company</th>
                            <th>Technology</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableArray.map((props) => {
                            return (
                                <tr>
                                    <th scope="row">{rowNumber++}</th>
                                    {/* <td><img src={Logo} alt="NA" height="30" width="30" /></td> */}
                                    <td><b>{props.enroll}</b></td>
                                    <td>{props.student_name}</td>
                                    <td>{props.department}</td>
                                    <td>{props.year}</td>
                                    <td>{props.cgpa}</td>
                                    <td>{props.email}</td>
                                    <td>{props.contact_no}</td>
                                    <td className="badge-style">
                                        <Badge color={(props.status ? "success" : "danger")}>
                                            {props.status ? 'Placed' : 'Unplaced'}
                                        </Badge>
                                    </td>
                                    <td>{props.company_name}</td>
                                    <td>{props.technology}</td>    
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </PDtableWrapper>
        </div>
    );
};

export default SLtable;