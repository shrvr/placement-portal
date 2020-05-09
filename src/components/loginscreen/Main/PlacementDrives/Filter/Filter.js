import React, { useState } from 'react';
import { Card, CardFooter, Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input, Button, ButtonGroup } from 'reactstrap';
import { FilterWrapper } from './Filter.style';

const Filter = (props) => {

    const [min_ctc, setMinCtc] = useState();
    const [onCampus, setOnCampus] = useState(false);
    const [offCampus, setOffCampus] = useState(false);

    const handleFilterApply = () => {
        
    }

    return (
        <div>
            <FilterWrapper>
                <div>
                    <Card>
                        <Row className="filter-row">
                            <Col className="filter-col" size="sm">
                                <FormGroup>
                                    <Label><b>CTC:</b></Label>
                                    <InputGroup className="input-group" size="sm">
                                        <InputGroupAddon className="input-addon" addonType="prepend">
                                            <InputGroupText>Min:</InputGroupText>
                                        </InputGroupAddon>
                                        <Input maxLength="4"
                                            onChange={(e) => setMinCtc(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup className="input-group" size="sm">
                                        <InputGroupAddon className="input-addon" addonType="prepend">
                                            <InputGroupText>Max:</InputGroupText>
                                        </InputGroupAddon>
                                        <Input maxLength="4" />
                                    </InputGroup>
                                </FormGroup>
                            </Col>

                            <Col className="filter-col">
                                <FormGroup>
                                    <Label><b>Location:</b></Label>
                                    <Input type="select" multiple size="sm">
                                        <option>Ahmedabad</option>
                                        <option>Bagaluru</option>
                                        <option>Vadodara</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col className="filter-col">
                                <FormGroup size="sm">
                                    <Label for="checkbox2"><b>Technology:</b></Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />
                                            Java
                                        </Label><br />
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />
                                            Python
                                        </Label><br />
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />
                                            React
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>

                            <Col className="filter-col">
                                <FormGroup size="sm">
                                    <Label for="checkbox3"><b>Vanue:</b></Label>
                                    <ButtonGroup>
                                        <Button className="bttn" size="sm" onClick={() => setOnCampus(!onCampus)} active={onCampus === true}>On-Campus</Button>
                                        <Button className="bttn" size="sm" onClick={() => setOffCampus(!offCampus)} active={offCampus === true}>Off-Campus</Button>
                                    </ButtonGroup>
                                </FormGroup>
                            </Col>

                            <Col className="filter-col">
                                <FormGroup size="sm">
                                    <Label for="checkbox3"><b>Eligibility:</b></Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox4" />
                                            Yes
                                                    </Label><br />
                                        <Label check>
                                            <Input type="checkbox" id="checkbox" />
                                            No
                                                </Label><br />
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <CardFooter>

                                <Button size="sm" className="card-footer-button" onClick={()=>handleFilterApply} >Apply</Button><br />
                                <Button size="sm" onClick={props.toggleFilter}>Cancel</Button><br />
                                <Button size="sm" className="card-footer-button" onClick={props.toggleFilter}>Reset</Button>

                            </CardFooter>
                        </Row>
                    </Card>
                </div>

            </FilterWrapper>

        </div>
    );
};

export default Filter;