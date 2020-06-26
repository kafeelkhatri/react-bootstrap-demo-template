import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Example from "./App.js";
import Toaster from "./Toast.js";
import Basic from "./Datatable.js";
import logo from "./download.svg";
import user1 from "./user1.jpg";
import user2 from "./user2.jpg";
import user3 from "./user3.jpg";
import "./App.css";

class Bootstrap extends React.Component {
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
    return (
      <Container fluid>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image src={logo} style={{ width: "45px" }} />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p></p>
          <Example />
          {"  "}
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <Button variant="success">Hover me to see</Button>
          </OverlayTrigger>
          <br></br>
          <br></br>
          <Toaster />
        </Jumbotron>
        <Row>
          <Col sm={6}>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle eventKey="0">Click me!</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ProgressBar animated now={25} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle eventKey="1">Click me!</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ProgressBar animated now={45} />
                    <br></br>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                    <Spinner animation="grow" variant="dark" />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

          <Col>
            <Badge pill variant="success">
              Span
            </Badge>{" "}
            <Badge pill variant="primary">
              Span
            </Badge>{" "}
            <Badge pill variant="warning">
              Span
            </Badge>{" "}
            <Badge pill variant="info">
              Span
            </Badge>{" "}
            <br></br>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <br></br>
            <Button href="http://www.dcactus.com" variant="outline-success">
              Dcactus
            </Button>{" "}
            <Button href="http://www.cactech-education.com" variant="primary">
              Cactech
            </Button>{" "}
            <Button variant="info" size="lg">
              React
            </Button>{" "}
            <Button block variant="warning">
              React
            </Button>{" "}
            <br></br>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Image src={user1} rounded />
          </Col>
          <Col sm={4}>
            <Image src={user3} thumbnail />
          </Col>
          <Col sm={4}>
            <Image src={user2} roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Card border="info">
              <Card.Header>
                <h2>About Me</h2>
              </Card.Header>
              <Card.Body>
                <h5>Photo of me:</h5>
                <div className="fakeimg">Fake Image</div>
                <p>
                  Some text about me in culpa qui officia deserunt mollit anim..
                </p>
                <h3>Some Links</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
                <hr className="d-sm-none"></hr>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <Card bg="info" style={{ color: "white" }}>
              <Card.Header>
                <h2>TITLE HEADING</h2>
              </Card.Header>
              <Card.Body>
                <h5>Title description, Dec 7, 2017</h5>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco.
                </p>
              </Card.Body>
            </Card>
            <br></br>
            <Card border="success">
              <Card.Body>
                <Card.Text>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Example select</Form.Label>
                          <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Label>Example multiple select</Form.Label>
                          <Form.Control as="select" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Label>Select File</Form.Label>
                        <Form.Group>
                          <Form.File
                            id="custom-file-translate-html"
                            label="Select File"
                            data-browse="Browse this pc"
                            custom
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Basic />
        <Row>
          <Col sm={6}>
            <Tabs defaultActiveKey="home" id="noanim-tab-example">
              <Tab eventKey="home" title="Home">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <h3>First slide label</h3>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Tab>
            </Tabs>
          </Col>
          <Col sm={6}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <div className="fakeimg"></div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="fakeimg"></div>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="fakeimg"></div>

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="jumbotron text-center"
              style={{ marginBottom: "0" }}
            >
              <p>Footer</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<Bootstrap />, document.getElementById("root"));
