import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

export function loadMeasurementsRequest() {
  return { type: types.MEASUREMENTS_LOAD_REQUEST };
}

export function loadMeasurementsSuccess(response) {
  return { type: types.MEASUREMENTS_LOAD_SUCCESS, response };
}

export function loadMeasurementsFailure(error) {
  return { type: types.MEASUREMENTS_LOAD_FAILURE, error };
}

export function loadMeasurements(params) {
  return function (dispatch) {
    dispatch(loadMeasurementsRequest());
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadMeasurementsSuccess(response));
      })
      .catch((error) => {
        dispatch(loadMeasurementsFailure(JSON.parse(error.message)));
        alert("Error loading measurements.");
      });
  };
}
