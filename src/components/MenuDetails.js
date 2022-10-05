import React from "react";
// import "../css/home.css";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import { Container } from "react-bootstrap";
import CommentForm from "./CommentForm";
import LoadingComponent from "./LoadingComponent";
function MenuDetails({ dish, isLoading, errMess, comments, postComment }) {
  const convertDateToCommentDateFormat = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderDish = (dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card className="menu_card">
          <CardImg
            top
            src={dish.image}
            alt={dish.name}
            className="card-image"
          />
          <CardBody>
            <CardTitle> {dish.name} </CardTitle>{" "}
            <CardText> {dish.description} </CardText>{" "}
          </CardBody>{" "}
        </Card>{" "}
      </div>
    );
  };
  const renderComments = (comment) => {
    console.log("render comments", comment);
    const renderedComments = comment.map((comm) => {
      return (
        <CardBody key={comm.id}>
          <CardText> {comm.comment} </CardText>{" "}
          <CardText>
            --{comm.author}, {convertDateToCommentDateFormat(comm.date)}{" "}
          </CardText>{" "}
        </CardBody>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardTitle> Comments </CardTitle> {renderedComments}
          <CommentForm dishId={dish.id} postComment={postComment} />
        </Card>{" "}
      </div>
    );
  };
  if (isLoading)
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  else if (errMess)
    return (
      <div className="container">
        <div className="row">
          <h4>{errMess}</h4>
        </div>
      </div>
    );
  else if (dish)
    return (
      <Container>
        <div className="row">
          {" "}
          {renderDish(dish)} {renderComments(comments)}{" "}
        </div>{" "}
      </Container>
    );
  else return <div> </div>;
}

export default MenuDetails;
