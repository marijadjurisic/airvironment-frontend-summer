import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function selectedTypesReducer(
  state = initialState.selectedTypes,
  action
) {
  switch (action.type) {
    case types.TEMPERATURE_CLICK:
      return { ...state, temperature: !state.temperature };
    case types.HUMIDITY_CLICK:
      return { ...state, humidity: !state.humidity };
    case types.POLLUTION_CLICK:
      return { ...state, pollution: !state.pollution };
    default:
      return state;
  }
}
