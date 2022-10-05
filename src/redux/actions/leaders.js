import { baseUrl } from "../../shared/baseURL";
import { ADD_LEADER, LEADER_FAILDED, LEADER_LOADING } from "../ActionTypes";
export const fatchLeaders = () => (dispatch) => {
  dispatch(leaderLoading());

  return fetch(baseUrl + "leaders")
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
    .then((leaders) => dispatch(addLeader(leaders)))
    .catch((error) => dispatch(leaderFailed(error.message)));
};

export const leaderLoading = () => ({
  type: LEADER_LOADING,
});

export const leaderFailed = (errmess) => ({
  type: LEADER_FAILDED,
  payload: errmess,
});
export const addLeader = (promos) => ({
  type: ADD_LEADER,
  payload: promos,
});
