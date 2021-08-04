import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function measurementsReducer(
  state = initialState.measurements,
  action
) {
  switch (action.type) {
    case types.MEASUREMENTS_LOAD_SUCCESS:
      return action.response;
    case types.MEASUREMENTS_LOAD_FAILURE:
      return state;
    default:
      return state;
  }
}
