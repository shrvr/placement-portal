import React from 'react';
import { SLtableWrapper } from './SLtable.style';
import { StudentArray } from './StudentArray';
import { Button, Table } from 'reactstrap';

const SLtable = () => {
    let rowNumber=1;
    return (
        <div>
            <SLtableWrapper>
                <Table className="table-style">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Enrollment No.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {StudentArray.map((props) => {
                            return (
                                <tr>
                                    <th scope="row">{rowNumber++}</th>
                                    <td>{props.enrollment}</td>
                                    <td><b>{props.studentName}</b></td>
                                    <td>
                                        <Button size="sm" className="bttn">Disaprove</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </SLtableWrapper>
        </div>
    );
};

export default SLtable;