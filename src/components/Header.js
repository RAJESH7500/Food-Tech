import React, { Fragment, useState } from "react";
// import { Nav.Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Jumbotron,
  Button,
  Modal,
  Form,
  Container,
} from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="#fff" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="assets/images/logo.png" width="41" height="30" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle ari-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">
                <span className="fa fa-home fa-lg"> Home </span>
              </Nav.Link>
              <Nav.Link href="/menu">
                <span className="fa fa-list fa-lg"> Menu </span>
              </Nav.Link>
              <Nav.Link href="/about">
                <span className="fa fa-info fa-lg"> About Us </span>
              </Nav.Link>
              <Nav.Link href="/contact">
                <span className="fa fa-address-card fa-lg"> Contact Us </span>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link>
                <Button variant="outline" onClick={handleShow}>
                  <span className="fa fa-sign-in fa-lg"> Login </span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1> Food-Tech Restaurant</h1>

              <h4>
                welcome to our Restaurant <br />
                we deliver good, clean & Healthy food
              </h4>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Login </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="username"> username </Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                />
              </Form.Group>{" "}
              <Form.Group>
                <Form.Label htmlFor="password"> password </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </Form.Group>{" "}
              <Form.Group>
                <Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="we may contact you?"
                    name="agree"
                  />
                </Form.Label>{" "}
              </Form.Group>{" "}
              <Button variant="primary" type="submit" onClick={handleClose}>
                Login{" "}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Jumbotron>
    </Fragment>
  );
}

export default Header;
