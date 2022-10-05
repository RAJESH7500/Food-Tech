import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function Forms() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  });
  const { firstname, lastname, telnum, email, agree, contactType, message } =
    formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    history.push("/thanks");
  };

  return (
    <Row className="row-content">
      <Col md={12}>
        <h3> Send your feedback </h3>{" "}
      </Col>
      <Col md={9}>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label htmlFor="firstName"> First Name </Form.Label>{" "}
            </Col>{" "}
            <Col md={10}>
              <Form.Control
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => onChange(e)}
              />{" "}
              <Form.Control.Feedback type="invalid">
                enter valid first name{" "}
              </Form.Control.Feedback>{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label htmlFor="lastName"> Last Name </Form.Label>{" "}
            </Col>{" "}
            <Col md={10}>
              <Form.Control
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => onChange(e)}
              />{" "}
              <Form.Control.Feedback type="invalid">
                enter valid first name{" "}
              </Form.Control.Feedback>{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label htmlFor="telnum"> Contact No. </Form.Label>{" "}
            </Col>{" "}
            <Col md={10}>
              <Form.Control
                type="tel"
                id="telnum"
                name="telnum"
                placeholder="Tel. Number"
                value={telnum}
                onChange={(e) => onChange(e)}
              />{" "}
              <Form.Control.Feedback type="invalid">
                enter valid first name{" "}
              </Form.Control.Feedback>{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label htmlFor="Email"> Email </Form.Label>{" "}
            </Col>{" "}
            <Col md={10}>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onChange(e)}
              />{" "}
              <Form.Control.Feedback type="invalid">
                enter valid first name{" "}
              </Form.Control.Feedback>{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col
              md={{
                size: 6,
                offset: 2,
              }}
            >
              <Form.Label>
                <Form.Check
                  type="checkbox"
                  label="we may contact you?"
                  name="agree"
                  checked={agree}
                  onChange={(e) => onChange(e)}
                />{" "}
              </Form.Label>{" "}
            </Col>{" "}
            <Col
              md={{
                size: 3,
                offset: 1,
              }}
            >
              <Form.Control
                as="select"
                value={contactType}
                name="contactType"
                onChange={(e) => onChange(e)}
              >
                <option> Tel.Num </option> <option> Email </option>{" "}
              </Form.Control>{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col md={2}>
              <Form.Label htmlFor="message"> Your Feedback </Form.Label>{" "}
            </Col>{" "}
            <Col md={10}>
              <Form.Control
                as="textarea"
                id="email"
                name="message"
                rows={10}
                value={message}
                onChange={(e) => onChange(e)}
              />{" "}
            </Col>{" "}
          </Form.Group>{" "}
          <Form.Group as={Row}>
            <Col
              md={{
                size: 10,
                offset: 2,
              }}
            >
              <Button variant="primary" type="summit">
                Send Your Feedbak{" "}
              </Button>{" "}
            </Col>{" "}
          </Form.Group>{" "}
        </Form>{" "}
      </Col>{" "}
    </Row>
  );
}

export default Forms;
