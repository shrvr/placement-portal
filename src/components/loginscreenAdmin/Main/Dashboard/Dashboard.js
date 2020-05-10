import React from "react";
import { DashboardWrapper } from "./Dashboard.style";
import { Row, Card, CardBody, Col, CardHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSitemap, faChartLine, faUserTie, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Bar } from 'react-chartjs-2';
import { greenColor } from "../../../constants/constants";
import MainNavbar from "../MainNavbar";


const bar = {
  labels: ['Computer', 'IT', 'EC', 'Electrical', 'Civil', 'Automobile', 'Machanical'],
  datasets: [
    {
      label: 'Placed Students',
      backgroundColor: "rgb(10, 196, 158)",
      borderColor: greenColor,
      borderWidth: 2,
      hoverBackgroundColor: greenColor,
      barPercentage: 0.5,
      // categoryPercentage:0.5,
      // barThickness: 6,
      // hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 19],
    },
  ],
};

const Dashboard = () => {
  return (
    <div>
      <DashboardWrapper>
        <div className="background-style">
          <MainNavbar title="Dashboard" />

          <Row className="m-1 mt-5">
            <Col>
              <Card className="m-0 card-style">
                <CardBody>
                  <Row>
                    <div className="m-3 mr-4 card-left-icon">
                      <FontAwesomeIcon icon={faSitemap} size="2x" />
                    </div>
                    <div className="mt-2 card-right-text">
                      Departments
                      <br />
                      <span>7</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card className="m-0 card-style">
                <CardBody>
                  <Row>
                    <div className="m-3 mr-4 card-left-icon">
                      <FontAwesomeIcon icon={faUsers} size="2x" />
                    </div>
                    <div className="mt-2  card-right-text">
                      Total Students
                      <br />
                      <span>4</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card className="m-0 card-style">
                <CardBody>
                  <Row>
                    <div className="m-3 mr-4 card-left-icon">
                      <FontAwesomeIcon icon={faChartLine} size="2x" />
                    </div>
                    <div className="mt-2 card-right-text">
                      Placed Student
                      <br />
                      <span>3</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card className="m-0 card-style">
                <CardBody>
                  <Row>
                    <div className="m-3 mr-4 card-left-icon">
                      <FontAwesomeIcon icon={faRupeeSign} size="2x" />
                    </div>
                    <div className="mt-2  card-right-text">
                      Highest Package
                      <br />
                      <span>7.00</span> LPA
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card className="m-0 card-style">
                <CardBody>
                  <Row>
                    <div className="m-3 mr-4 card-left-icon">
                      <FontAwesomeIcon icon={faUserTie} size="2x" />
                    </div>
                    <div className="mt-2  card-right-text">
                      Campus Drives
                      <br />
                      <span>5</span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card className="m-4 mt-4">
            <CardHeader>
              PLACEMENT RECORD
            </CardHeader>
            <CardBody>
              <div>
                <Bar data={bar} width={100} height={30} />
              </div>
            </CardBody>
          </Card>

        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
