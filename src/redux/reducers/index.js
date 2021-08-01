import { combineReducers } from "redux";
import averageValues from "./averageValuesReducer";

const rootReducer = combineReducers({ averageValues });

export default rootReducer;
