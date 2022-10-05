// import { LEADERS } from "../../shared/leaders";
import { ADD_LEADER, LEADER_FAILDED, LEADER_LOADING } from "../ActionTypes";

export const Leaders = (
  state = { isLoading: true, errMess: null, leaders: [] },
  action
) => {
  switch (action.type) {
    case ADD_LEADER:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    case LEADER_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        leaders: [],
      };
    case LEADER_FAILDED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
