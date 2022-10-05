import { ADD_DISHES, DISHES_FAILED, DISHES_LOADING } from "../ActionTypes";
// import { DISHES } from "../../shared/dishes";
import { baseUrl } from "../../shared/baseURL";

export const fatchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          console.log("error dishes is  is", error);
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: DISHES_LOADING,
});

export const addDishes = (dishes) => ({
  type: ADD_DISHES,
  payload: dishes,
});
export const dishesFailed = (erroMess) => ({
  type: DISHES_FAILED,
  payload: erroMess,
});
