import "./App.css";
import Menu from "./components/MenuComponent";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import { connect } from "react-redux";
import MenuDetail from "./components/MenuDetails";
import Thanks from "./components/Thanks";

import { postComment } from "./redux/actions/addComment";
import { fatchDishes } from "./redux/actions/dishes";
import { fatchComments } from "./redux/actions/comments";
import { fatchPromos } from "./redux/actions/promotions";
import { fatchLeaders } from "./redux/actions/leaders";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect } from "react";

function App(props) {
  console.log("tranision gruoup key is", props);
  useEffect(() => {
    props.fatchDishes();
    props.fatchComments();
    props.fatchPromos();
    props.fatchLeaders();
  }, []);
  const DishWithId = ({ match }) => {
    return (
      <MenuDetail
        dish={
          props.dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        postComment={props.postComment}
      />
    );
  };
  return (
    <BrowserRouter className="root-app">
      <Header />
      <TransitionGroup className="page" timeout={300}>
        <CSSTransition>
          <Switch>
            <Route path="/menu">
              <Menu dishes={props.dishes} />
              {""}
            </Route>{" "}
            <Route path="/contact">
              <Contact />
            </Route>{" "}
            <Route path="/home">
              <Home
                dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={props.dishes.isLoading}
                dishesErrMess={props.dishes.errMess}
                promotion={
                  props.promotions.promotions.filter(
                    (promo) => promo.featured
                  )[0]
                }
                promoLoading={props.promotions.isLoading}
                promoErrMess={props.promotions.errMess}
                leader={
                  props.leaders.leaders.filter((leader) => leader.featured)[0]
                }
                leaderLoading={props.leaders.isLoading}
                leaderErrMess={props.leaders.errMess}
              />{" "}
            </Route>{" "}
            <Route path="/about">
              <AboutUs leaders={props.leaders} />{" "}
            </Route>{" "}
            <Route path="/thanks">
              <Thanks />
            </Route>{" "}
            <Route path="/test/:dishId" component={DishWithId} />{" "}
            <Route path="/">
              <Home
                dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={props.dishes.isLoading}
                dishesErrMess={props.dishes.errMess}
                promotion={
                  props.promotions.promotions.filter(
                    (promo) => promo.featured
                  )[0]
                }
                promoLoading={props.promotions.isLoading}
                promoErrMess={props.promotions.errMess}
                leader={
                  props.leaders.leaders.filter((leader) => leader.featured)[0]
                }
                leaderLoading={props.leaders.isLoading}
                leaderErrMess={props.leaders.errMess}
              />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer className="footer-main" />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    comments: state.comments,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fatchDishes: () => dispatch(fatchDishes()),
  fatchComments: () => dispatch(fatchComments()),
  fatchPromos: () => dispatch(fatchPromos()),
  fatchLeaders: () => dispatch(fatchLeaders()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
