import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Dishes } from "./reducers/dishes";
import { Leaders } from "./reducers/leaders";
import { Comments } from "./reducers/comments";
import { Promotions } from "./reducers/promotions";
import { InitialFeedback } from "./Forms";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    dishes: Dishes,
    comments: Comments,
    leaders: Leaders,
    promotions: Promotions,
    ...createForms({ InitialFeedback }),
  }),
  applyMiddleware(thunk, logger)
);
export default store;
