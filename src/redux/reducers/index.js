import { combineReducers } from "redux";
import averageValues from "./averageValuesReducer";
import measurements from "./measurementsReducer"

const rootReducer = combineReducers({ averageValues, measurements });

export default rootReducer;
