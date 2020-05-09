import React, { useState,useEffect} from 'react';
import { Table, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import Logo from "../../../../images/capgemini_logo.png"
import { TableArray } from '../TableArray';
import { greenColor, whiteColor,serverApi,campusDriveApi, getDriveById  } from '../../../../constants/constants';
import { PDtableWrapper } from './PDtable.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
const PDtable = (props) => {
    let rowNumber = 1;
    const [isOpenModal, setisOpenModal] = useState(false);
    const toggleModal = () => setisOpenModal(!isOpenModal);

    const openModalById=(id)=>{
        setisOpenModal(true);
        axios.defaults.headers.common = { 'api_key': `${token}`, "id" : id }
        axios.post(`${serverApi}${getDriveById}`,axios.defaults.headers.common).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log("response", res)
                setDataModal(res.data.data);
            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))
    }
    const [tableArray, setTableArray] = useState([]);
    
    const [dataModal,setDataModal]=useState([]);

    let token = localStorage.getItem("token");
    useEffect(() => {
        // setTableArray(TableArray);

        axios.defaults.headers.common = { 'api_key': `${token}` }
        axios.get(`${serverApi}${campusDriveApi}`).then(res => {
            console.log(res)
            if (res.status === 200) {
                console.log("response", res)
                setTableArray(res.data.data);
            } else {
                console.log("else", res.status)
                alert(res.data.message)
            }
        }).catch(err => alert(err.response.data.message))
    }, [])

    return (
        <div>
            <PDtableWrapper>
                <Table className="table-style">
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Logo</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>CTC</th>
                            <th>Location</th>
                            <th>Technology</th>
                            <th>Venue</th>
                            <th>Deadline</th>
                            <th>Details</th>
                            <th>Applications</th>
                            <th>Student List</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableArray.map((props) => {
                            return (
                                <tr>
                                    <th scope="row">{rowNumber++}</th>
                                    <td><img src={Logo} alt="NA" height="30" width="30" /></td>
                                    <td><b>{props.company_name}</b></td>
                                    <td>{props.position}</td>
                                    <td>{props.ctc}</td>
                                    <td>{props.location}</td>
                                    <td>{props.technologies}</td>
                                    <td className="badge-style">
                                        <Badge color={(props.venue === "LDRP" ? "primary" : "warning")}>
                                            {props.venue}
                                        </Badge>
                                    </td>

                                    {/* <td className="badge-style">
                                        <Badge color={props.status ? "success" : "danger"}>
                                            {props.status ? "APPLIED" : "NOT APPLIED"}
                                        </Badge>
                                    </td> */}
                                    <td>{props.deadline}</td>
                                    <td><Button size="sm" className="bttn" onClick={()=>{openModalById(props.id)}}>View</Button></td>
                                    <td>0</td>
                                    <td><Button size="sm" className="bttn">Show</Button></td>
                                    <td><ButtonGroup>
                                        <Button size="sm" className="bttn" ><FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button size="sm" color="danger"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                                    </ButtonGroup></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Modal isOpen={isOpenModal} toggle={toggleModal}>
                    <ModalHeader
                        style={{ backgroundColor: greenColor }}
                    >
                        <strong style={{ color: whiteColor }} >{dataModal.company_name}</strong>
                    </ModalHeader>
                    <ModalBody
                        style={{ backgroundColor: whiteColor }}
                    >
                        <b>Position:</b>{dataModal.position}<br />
                        <b>CTC:</b>{dataModal.ctc}<br />
                        <b>Locations:</b>{dataModal.location}<br />
                        <b>Technologies:</b>{dataModal.technologies}<br />
                        <b>Venue:</b>{dataModal.venue}<br />
                        <b>Deadline:</b>{dataModal.deadline}<br />
                        <b>Minimum Requirements:</b><br />
                        <b>Min. CPI:</b>{dataModal.min_cpi}<br />
                        <b>Min. 10th + 12th Average:</b>{dataModal.aggregate_10_12}<br />
                        <b>Allowed Backlogs:</b>{dataModal.backlogs}<br />
                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: whiteColor }}>
                        <Button style={{ backgroundColor: greenColor }} size="sm" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </PDtableWrapper>
        </div>
    );
};

export default PDtable;