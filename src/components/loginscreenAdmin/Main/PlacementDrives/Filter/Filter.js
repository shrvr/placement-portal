import React from 'react';
import { Card, CardFooter, Row, Col, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { FilterWrapper } from './Filter.style';

const Filter = (props) => {
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
                                        <Input maxLength="4" />
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
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
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
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox3" />
                                            On-Campus
                                                    </Label><br />
                                        <Label check>
                                            <Input type="checkbox" id="checkbox3" />
                                            Off-Campus
                                                </Label><br />
                                    </FormGroup>
                                </FormGroup>
                            </Col>

                            <CardFooter>

                                <Button size="sm" className="card-footer-button" onClick={props.toggleFilter}>Apply</Button><br />
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