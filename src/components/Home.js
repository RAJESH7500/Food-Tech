import React from "react";
import "../css/Home.css";
import {
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import LoadingComponent from "./LoadingComponent";
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) return <LoadingComponent />;
  else if (errMess) return <h4>{errMess}</h4>;
  else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} className="card-image">
          {console.log("item is ", item)}
        </CardImg>{" "}
        <CardBody>
          <CardTitle> {item.name} </CardTitle>{" "}
          {item.designation ? (
            <CardSubtitle> {item.designation} </CardSubtitle>
          ) : null}{" "}
          <CardText> {item.description} </CardText>{" "}
        </CardBody>{" "}
      </Card>
    );
}

function Home({
  dish,
  dishesLoading,
  dishesErrMess,
  promotion,
  promoLoading,
  promoErrMess,
  leader,
  leaderLoading,
  leaderErrMess,
}) {
  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard
            item={dish}
            isLoading={dishesLoading}
            errMess={dishesErrMess}
          />{" "}
        </div>{" "}
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard
            item={promotion}
            isLoading={promoLoading}
            errMess={promoErrMess}
          />{" "}
        </div>{" "}
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard
            item={leader}
            isLoading={leaderLoading}
            errMess={leaderErrMess}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
