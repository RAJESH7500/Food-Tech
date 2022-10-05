import React from "react";
import { Media, Card, Breadcrumb } from "react-bootstrap";

function RenderLeaders({ leader }) {
  return (
    <Media>
      <img src={leader.image} alt={leader.name} width="50px" height="50px" />
      <Media.Body>
        <h5 className="mt-0 mb-1"> {leader.name} </h5>{" "}
        <p> {leader.degination} </p>{" "}
        <p className="mb-4"> {leader.description} </p>{" "}
      </Media.Body>{" "}
    </Media>
  );
}

function AboutUs(props) {
  const leaderComponent = props.leaders.leaders.map((leadern) => {
    return <RenderLeaders key={leadern.id} leader={leadern} />;
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <Breadcrumb.Item href="/home"> Home </Breadcrumb.Item>{" "}
          <Breadcrumb.Item active> About Us </Breadcrumb.Item>{" "}
        </Breadcrumb>{" "}
        <div className="col-12">
          <h3> About Us </h3> <hr />
        </div>{" "}
      </div>{" "}
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2> Our History </h2>{" "}
          <p>
            Started in 2021, Food-Tech quickly established itself as a culinary
            icon par excellence in India.With its unique brand of world fusion
            cuisine that can be found nowhere else, it enjoys patronage from the
            A - list clientele in India.Featuring four of the best three - star
            Michelin chefs in the world, you never know what will arrive on your
            plate the next time you visit us.{" "}
          </p>{" "}
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em> The Frying Pan </em>, a successful chain started by our CEO,
            Mr. Rajesh Kumar, that featured for the first time the world 's best
            cuisines in a pan.{" "}
          </p>{" "}
        </div>{" "}
        <div className="col-12 col-md-5">
          <Card>
            <Card.Header className="bg-primary text-white">
              Facts At a Glance{" "}
            </Card.Header>{" "}
            <Card.Body>
              <dl className="row p-1">
                <dt className="col-6"> Started </dt>{" "}
                <dd className="col-6"> 3 Feb 2021 </dd>{" "}
                <dt className="col-6"> Major Stake Holder </dt>{" "}
                <dd className="col-6"> HK Fine Foods Inc. </dd>{" "}
                <dt className="col-6"> Last Year 's Turnover</dt>{" "}
                <dd className="col-6"> $1, 250, 375 </dd>{" "}
                <dt className="col-6"> Employees </dt>{" "}
                <dd className="col-6"> 40 </dd>{" "}
              </dl>{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </div>{" "}
        <div className="col-12">
          <Card>
            <Card.Body className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I 'm not
                  hungry enough to eat six.{" "}
                </p>{" "}
                <footer className="blockquote-footer">
                  Yogi Berra,{" "}
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P.Pepe, Diversion Books,
                    2014{" "}
                  </cite>{" "}
                </footer>{" "}
              </blockquote>{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </div>{" "}
      </div>{" "}
      <div className="row row-content">
        <div className="col-12">
          <h2> Corporate Leadership </h2>{" "}
        </div>{" "}
        <div className="col-12">
          <ul className="list-unstyled"> {leaderComponent} </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default AboutUs;
