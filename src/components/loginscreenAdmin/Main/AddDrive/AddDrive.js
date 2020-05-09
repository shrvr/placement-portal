import React, { useState } from 'react';
import MainNavbar from '../MainNavbar';
import { Card, CardHeader, CardBody, Table, Input, CardFooter, Button, Row, ButtonGroup } from 'reactstrap';
import { AddDriveWrapper } from './AddDrive.style';
import { serverApi, addDriveApi } from '../../../constants/constants';
import axios from "axios";

const AddDrive = () => {

    let token = localStorage.getItem("token");


    // const [elegi_departments, setElgiDepartments] = useState([]);

    // const onCheckboxBtnClick = (selected) => {
    //     const index = elegi_departments.indexOf(selected);
    //     if (index < 0) {
    //         elegi_departments.push(selected);
    //     } else {
    //         elegi_departments.splice(index, 1);
    //     }
    //     setElgiDepartments([...elegi_departments]);
    // }

    // const add_locationField = () => {
    //     var div1 = document.createElement('div');
    //     div1.innerHTML = document.getElementById('hidden-location-input').innerHTML;
    //     document.getElementById('location').appendChild(div1);
    // }

    // const add_technologyField = () => {
    //     var div1 = document.createElement('div');
    //     div1.innerHTML = document.getElementById('hidden-location-input').innerHTML;
    //     document.getElementById('technology').appendChild(div1);
    // }

    const [location, setLocation] = useState("");
    const [technologies, setTechnologies] = useState("");

    const [company_name, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [ctc, setCtc] = useState();

    const [vanue, setVanue] = useState("");
    // const [part_clgs, setPartClgs] = useState("");
    const [description, setDescription] = useState("");

    const [marks_avg, setMarksAvg] = useState();
    const [min_cpi, setMinCpi] = useState();
    const [min_backlog, setMinBacklog] = useState();
    const [deadline, setDeadline] = useState("");

    const handleAdd = () => {
        axios.defaults.headers.common = {
            "Content-Type": "application/json",
            "api_key": `${token}`
        }
        const data = {
            company_name: company_name,
            position: position,
            ctc: ctc,
            location: location,
            technologies: technologies,
            venue: vanue,
            // part_clgs:part_clgs,
            // elegi_departments:elegi_departments,
            description: description,
            aggregate_10_12: marks_avg,
            min_cpi: min_cpi,
            backlog: min_backlog,
            deadline:deadline

        }
        axios.post(`${serverApi}${addDriveApi}`, data, axios.defaults.headers.common).then(res => {
            console.log(res.status)
            if (res.status === 200) {
                // localStorage.setItem("token", res.data.data.token)
                console.log("response", res)
            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))

    }

    return (
        <div>
            <AddDriveWrapper>
                <div className="background-style">
                    <MainNavbar title="Add Drive" />

                    <Card className="card-adddrive">
                        <CardHeader className="card-header-adddrive">
                            <strong>ADD DRIVE</strong>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <Table bordered className="table-adddrive">
                                    <tbody>
                                        <tr>
                                            <th>Company Name</th>
                                            <td>
                                                <Input type="text"
                                                    size="sm"
                                                    // id="input-long"
                                                    onChange={(e) => { setCompanyName(e.target.value) }}
                                                    value={company_name}
                                                    className="edit-input-style"
                                                />

                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <th>Logo</th>
                                            <td>
                                                <Input type="file"
                                                    size="sm"
                                                // id="input-long"

                                                // className="edit-input-style"
                                                />
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <th>Position</th>
                                            <td>
                                                <Input type="text"
                                                    size="sm"
                                                    // id="input-long"
                                                    value={position}
                                                    onChange={(e) => { setPosition(e.target.value) }}
                                                    className="edit-input-style"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>CTC <small>(in LPA)</small></th>
                                            <td>

                                                <Input type="text"
                                                    size="sm"
                                                    id="input-xshort"
                                                    maxLength="4"
                                                    placeholder="ex.: 3.80"
                                                    className="edit-input-style"
                                                    value={ctc}
                                                    onChange={(e) => { setCtc(e.target.value) }}
                                                />

                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>
                                                <div id="location" >
                                                    <Input type="text"
                                                        size="sm"
                                                        id="input-location"
                                                        placeholder="ex.: Ahmedabad"
                                                        className="edit-input-style"
                                                        onChange={(e) => { setLocation(e.target.value) }}
                                                    />
                                                </div>
                                                {/* <div className="add-other-style" onClick={add_locationField}>Add other</div> */}

                                                {/* div to be copied */}
                                                {/* <div id="hidden-location-input" style={{ display: "none" }}>
                                                <Input
                                                    type="text"
                                                    size="sm"
                                                    id="input-location"
                                                    onBlur={(e) => { location.push(e.target.value) }}
                                                    className="edit-input-style"
                                                />
                                            </div>
                                            <p>Selected: {JSON.stringify(location)}</p> */}

                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Technologies</th>
                                            <td>
                                                <div id="technology">
                                                    <Input
                                                        type="text"
                                                        size="sm"
                                                        id="input-location"
                                                        placeholder="ex.: Python"
                                                        className="edit-input-style"
                                                        value={technologies}
                                                        onChange={(e) => { setTechnologies(e.target.value) }}
                                                    />
                                                </div>
                                                {/* <div className="add-other-style" onClick={add_technologyField}>Add other</div> */}
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Vanue</th>
                                            <td>
                                                <Input type="text"
                                                    size="sm"
                                                    // id="input-long"
                                                    className="edit-input-style"
                                                    value={vanue}
                                                    onChange={(e) => { setVanue(e.target.value) }}

                                                />
                                            </td>
                                        </tr>
                                        {/* <tr>
                                        <th>Participant colleges</th>
                                        <td>
                                            <Input type="text"
                                                size="sm"
                                                // id="input-long"
                                                className="edit-input-style"
                                                value={part_clgs}
                                                onChange={(e) => { setPartClgs(e.target.value) }}

                                            />
                                        </td>
                                    </tr> */}
                                        {/* <tr>
                                        <th>Eligible Departments</th>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("computer")} active={elegi_departments.includes("computer")}>Computer</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("it")} active={elegi_departments.includes("it")}>IT</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("ec")} active={elegi_departments.includes("ec")}>EC</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("ele")} active={elegi_departments.includes("ele")}>Ele.</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("civil")} active={elegi_departments.includes("civil")}>Civil</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("auto")} active={elegi_departments.includes("auto")}>Auto</Button>
                                                <Button size="sm" className="bttn" onClick={() => onCheckboxBtnClick("me")} active={elegi_departments.includes("me")}>Machanical</Button>
                                            </ButtonGroup>
                                            <p>Selected: {JSON.stringify(elegi_departments)}</p>
                                        </td>
                                    </tr> */}
                                        <tr>
                                            <th>Description</th>
                                            <td>
                                                <Input type="textarea"
                                                    size="sm"
                                                    // id="input-long"
                                                    // className="edit-input-style"
                                                    value={description}
                                                    onChange={(e) => { setDescription(e.target.value) }}

                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Eligibility Criteria</th>
                                            <td>
                                                <Table bordered className="eligi-table" >
                                                    <tbody>
                                                        <tr>
                                                            <th>Category</th>
                                                            <th>Min. Requirement</th>
                                                        </tr>
                                                        <tr>
                                                            <td>10th + 12th average</td>
                                                            <td>
                                                                <Input type="text"
                                                                    size="sm"
                                                                    placeholder="ex.: 87"
                                                                    maxLength="5"
                                                                    value={marks_avg}
                                                                    onChange={(e) => { setMarksAvg(e.target.value) }}
                                                                    className="edit-input-style"
                                                                />
                                                            </td>

                                                        </tr>
                                                        {/* <tr>
                                                        <td>12th (%)</td>
                                                        <td><Input type="text"
                                                            size="sm"
                                                            placeholder="ex.: 85.05"
                                                            maxLength="5"
                                                            className="edit-input-style"
                                                        /> %</td>
                                                    </tr> */}
                                                        <tr>
                                                            <td>CPI</td>
                                                            <td><Input type="text"
                                                                size="sm"
                                                                maxLength="4"
                                                                placeholder="ex.: 8.32"
                                                                className="edit-input-style"
                                                                value={min_cpi}
                                                                onChange={(e) => { setMinCpi(e.target.value) }}
                                                            /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Backlogs</td>
                                                            <td><Input type="text"
                                                                size="sm"
                                                                maxLength="2"
                                                                placeholder="ex.:1"
                                                                className="edit-input-style"
                                                                value={min_backlog}
                                                                onChange={(e) => { setMinBacklog(e.target.value) }}

                                                            /></td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>Allowed solved Backlogs</td>
                                                            <td><Input type="text"
                                                                size="sm"
                                                                maxLength="2"
                                                                placeholder="ex.:1"
                                                                className="edit-input-style"
                                                            /></td>
                                                        </tr> */}
                                                    </tbody>

                                                </Table>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <th>Add Documents</th>
                                            <td>
                                                <Input type="file"
                                                    size="sm"
                                                // id="input-long"
                                                // className="edit-input-style"
                                                />
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <th>DeadLine of Registration:</th>
                                            <td>
                                                <Input type="text"
                                                    size="sm"
                                                    // id="input-long"
                                                    className="edit-input-style"
                                                    value={deadline}
                                                    onChange={(e) => { setDeadline(e.target.value) }}

                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Button size="sm" onClick={handleAdd}>Add</Button>{' '}
                            <Button size="sm" >Reset</Button>
                        </CardFooter>
                    </Card>
                </div>
            </AddDriveWrapper>
        </div>
    );
};

export default AddDrive;