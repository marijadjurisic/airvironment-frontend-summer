import * as types from "./actionTypes";

const temperatureClick = () => ({
  type: types.TEMPERATURE_CLICK,
});

const humidityClick = () => ({
  type: types.HUMIDITY_CLICK,
});

const pollutionClick = () => ({
  type: types.POLLUTION_CLICK,
});

export function toggleTemperature() {
  return function (dispatch) {
    dispatch(temperatureClick());
  };
}

export function toggleHumidity() {
  return function (dispatch) {
    dispatch(humidityClick());
  };
}

export function togglePollution() {
  return function (dispatch) {
    dispatch(pollutionClick());
  };
}
