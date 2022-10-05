import { baseUrl } from "../../shared/baseURL";
import { PROMOS_FAILED, PROMOS_LOADING, ADD_PROMOS } from "../ActionTypes";
export const fatchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: PROMOS_FAILED,
  payload: errmess,
});
export const addPromos = (promos) => ({
  type: ADD_PROMOS,
  payload: promos,
});
