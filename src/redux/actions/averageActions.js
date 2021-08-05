import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

const loadAverageValuesSuccess = (response) => ({
  type: types.AVERAGE_MEASUREMENTS_SUCCESS,
  response,
});

const loadAverageValuesFailure = (error) => ({
  type: types.AVERAGE_MEASUREMENTS_FAILURE,
  error,
});

export function loadAverageValues(params) {
  return function (dispatch) {
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadAverageValuesSuccess(response));
      })
      .catch((error) => {
        dispatch(loadAverageValuesFailure(JSON.parse(error.message)));
        alert("Error loading average values.");
      });
  };
}
