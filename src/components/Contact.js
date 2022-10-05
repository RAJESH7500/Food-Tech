import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Form from "./Form";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem href="/home"> Home </BreadcrumbItem>{" "}
          <BreadcrumbItem active> Contact Us </BreadcrumbItem>{" "}
        </Breadcrumb>{" "}
      </div>{" "}
      <div className="row row-content">
        <div className="col-12">
          <h3> Location Information </h3>{" "}
        </div>{" "}
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5> Our Address </h5>{" "}
          <address>
            Firozabad Uttar Pradesh, <br />
            by Agra Road, <br />
            India <br />
            <i className="fa fa-phone"> </i>: +91 ********** <br />
            <i className="fa fa-fax"> </i>: +91 ********** <br />
            <i className="fa fa-envelope"> </i>:{" "}
            <Link to="mailto:confusion@food.net"> foodtech@food.net </Link>{" "}
          </address>{" "}
        </div>{" "}
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5> Map of our Location </h5>{" "}
        </div>{" "}
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <Link
              role="button"
              className="btn btn-primary"
              to="tel:+85212345678"
            >
              <i className="fa fa-phone"> </i> Call{" "}
            </Link>{" "}
            <Link to="#" role="button" className="btn btn-info">
              <i className="fa fa-skype"> </i> Skype{" "}
            </Link>{" "}
            <Link
              role="button"
              className="btn btn-success"
              to="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"> </i> Email{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Form />
    </div>
  );
}

export default Contact;
