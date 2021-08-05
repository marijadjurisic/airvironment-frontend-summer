import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

const loadMeasurementsSuccess = (response) => ({
  type: types.MEASUREMENTS_LOAD_SUCCESS,
  response,
});

const loadMeasurementsFailure = (error) => ({
  type: types.MEASUREMENTS_LOAD_FAILURE,
  error,
});

export function loadMeasurements(params) {
  return function (dispatch) {
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
