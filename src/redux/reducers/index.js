import { combineReducers } from "redux";
import averageValues from "./averageValuesReducer";
import measurements from "./measurementsReducer";
import selectedTypes from "./selectedTypesReducer";

const rootReducer = combineReducers({
  averageValues,
  measurements,
  selectedTypes,
});

export default rootReducer;
