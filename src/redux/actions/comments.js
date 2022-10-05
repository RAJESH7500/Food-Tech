import { baseUrl } from "../../shared/baseURL";
import { ADD_COMMENTS, COMMENTS_FAILED } from "../ActionTypes";

export const fatchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          console.log("error is ", error);
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
  type: COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});
