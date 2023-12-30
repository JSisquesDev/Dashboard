/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import { chartExample2, chartExample4 } from "variables/charts.js";

function CurriculumVitae(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="6">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Datos Personales</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/jsisques.jpeg")}
                        style={{ width: "75%", height: "75%" }}
                      />
                    </a>
                  </Col>
                  <Col xs="6">
                    <Row>
                      <h2 className="title">
                        Javier Plaza Sisqués
                        <br></br>
                        <p>
                          <small className="text-muted">Programador</small>
                        </p>
                      </h2>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <p>javierplazasisques@gmail.com</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a
                          href="tel:+34659761003"
                          onClick={(e) => e.preventDefault()}
                        >
                          <p>+34 659 76 10 03</p>
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a
                          href="https://github.com/JSisques"
                          onClick={(e) => e.preventDefault()}
                        >
                          <p>JSisques</p>
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="font-icon-list" xs="0">
                        <i className="tim-icons icon-single-02" />
                      </Col>
                      <Col className="font-icon-list" xs="11">
                        <a
                          href="https://www.linkedin.com/in/javier-plaza-sisqu%C3%A9s-b79367172/"
                          onClick={(e) => e.preventDefault()}
                        >
                          <p>Javier Plaza Sisqués</p>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Estudios</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Experiencia</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Lenguajes</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Proyectos</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Idiomas</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Premios</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Otros</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card style={{ height: "20rem" }} className="card-chart">
              <CardHeader>
                <h5 className="card-category">Sobre mi</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Aprendo y amplio mis conocimientos</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Me gusta trabajar en equipo</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="font-icon-list" xs="1">
                    <i className="tim-icons icon-single-02" />
                  </Col>
                  <Col className="font-icon-list">
                    <p>Me gusta resolver todo tipo de problemas</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CurriculumVitae;