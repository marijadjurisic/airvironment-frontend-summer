import React, { useState } from "react";
import "../assets/styles/components/Filters.scss";
import Slider from "@material-ui/core/Slider";
import {
  DropDown,
  PollutionOff,
  HumidityOff,
  TemperatureOff,
  TemperatureOn,
  HumidityOn,
  PollutionOn,
  ConfirmFilter,
} from "../assets/icons";
import {
  toggleTemperature,
  togglePollution,
  toggleHumidity,
} from "../redux/actions/selectedTypesActions";
import { connect } from "react-redux";
import moment from "moment";
import { loadAverageValues } from "../redux/actions/averageActions";

const Filters = ({
  filters,
  toggleHumidity,
  togglePollution,
  toggleTemperature,
  filterAverageValues,
  setFilters,
}) => {
  let date = moment();
  let todayDate = moment(date).toISOString().substr(0, 10);
  const [value, setValue] = useState([0, 100]);
  const valuetext = (value) => `${value}h`;
  const [daysOffset, setDaysOffset] = useState(1);
  const [params, setParams] = useState({
    all: true,
    date_to: moment().toISOString(),
    date_from: moment().subtract(daysOffset, "days").toISOString(),
    humidity_from: value[0],
    humidity_to: value[1],
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setParams({
      ...params,
      humidity_from: newValue[0],
      humidity_to: newValue[1],
    });
  };

  return (
    <div className="filter">
      <div className="filter-items-wrapper">
        <div className="date-wrapper">
          <div className="filterData" id="range">
            <span className="filterName">Date</span>
            <div className="slideDown" style={{ position: "relative" }}>
              <DropDown className="iconSlideDown" />
              <input
                className="filterChoice unstyled"
                type="date"
                defaultValue={todayDate}
                max={todayDate}
                onChange={(event) => {
                  let newDateTo = moment(event.target.value, "YYYY-MM-DD");
                  setParams({
                    ...params,
                    date_to: moment(newDateTo).endOf("day").toISOString(),
                    date_from: moment(newDateTo)
                      .subtract(daysOffset, "days")
                      .toISOString(),
                  });
                }}
              />
            </div>
          </div>
          <div className="filterData">
            <span className="filterName">Range</span>
            <div className="filterChoice" style={{ position: "relative" }}>
              <DropDown className="iconSlideDown" />
              <select
                onChange={(event) => {
                  let newDate = moment(params.date_to, "YYYY-MM-DD")
                    .subtract(Number(event.target.value), "days")
                    .toISOString();
                  setDaysOffset(Number(event.target.value));
                  setParams({ ...params, date_from: newDate });
                }}
              >
                <option value="1">1</option>
                <option value="7">7</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>

        <div className="filterData slider">
          <span className="filterName">Humidity range</span>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={0}
            max={100}
          />
        </div>

        <div className="iconsWrapper">
          <div className="filterData" id="filters">
            <span className="filterName">data type</span>
            <div className="filtersContainer">
              <div onClick={() => toggleTemperature()}>
                {filters.temperature ? (
                  <TemperatureOn className="filled" />
                ) : (
                  <TemperatureOff />
                )}
              </div>
              <div onClick={() => toggleHumidity()}>
                {filters.humidity ? (
                  <HumidityOn className="filled" />
                ) : (
                  <HumidityOff />
                )}
              </div>
              <div onClick={() => togglePollution()}>
                {filters.pollution ? (
                  <PollutionOn className="filled" />
                ) : (
                  <PollutionOff />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmFilter
        className="checkedIcon"
        onClick={() => {
          setFilters(false);
          filterAverageValues(params);
        }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    filters: state.selectedTypes,
  };
}

const mapDispatchToProps = {
  toggleTemperature,
  toggleHumidity,
  togglePollution,
  filterAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
