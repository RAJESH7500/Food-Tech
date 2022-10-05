import React from "react";
import { Container, Row, Breadcrumb, Jumbotron } from "react-bootstrap";

function Thanks() {
  return (
    <div className="thanks">
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href="/home"> Home </Breadcrumb.Item>{" "}
            <Breadcrumb.Item active> Thanks </Breadcrumb.Item>{" "}
          </Breadcrumb>{" "}
        </Row>{" "}
        <Jumbotron className="text-center mb-2">
          <h1> THANKYOU FOR YOUR RESPONSE </h1> <p> WE WILL CONTACT SOON </p>{" "}
        </Jumbotron>{" "}
      </Container>
    </div>
  );
}

export default Thanks;
