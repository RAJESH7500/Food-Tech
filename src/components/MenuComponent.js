import React from "react";
import { Card, Container, CardColumns, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../css/MenuComponents.css";

function MenuComponent({ dishes }) {
  const menu = dishes.dishes.map((dish) => {
    return (
      <Card key={dish.id} className="card-transparent menu_card">
        <Link to={`/test/${dish.id}`}>
          <Card.Img
            variant="top"
            src={dish.image}
            alt={dish.name}
            className="card-image"
          />
          <Card.ImgOverlay>
            <Card.Text style={{ color: "black" }}> {dish.name} </Card.Text>{" "}
          </Card.ImgOverlay>{" "}
        </Link>{" "}
      </Card>
    );
  });
  return (
    <Container>
      <div className="row">
        <Breadcrumb>
          <Breadcrumb.Item href="/home"> Home </Breadcrumb.Item>{" "}
          <Breadcrumb.Item active> Menu </Breadcrumb.Item>{" "}
        </Breadcrumb>{" "}
      </div>{" "}
      <CardColumns> {menu} </CardColumns>{" "}
    </Container>
  );
}

export default MenuComponent;
