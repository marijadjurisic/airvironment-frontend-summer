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

const Filters = ({
  filters,
  toggleHumidity,
  togglePollution,
  toggleTemperature,
}) => {
  let date = moment().startOf("day");
  let todayDate = date.toISOString().substr(0, 10);
  const [value, setValue] = useState([0, 24]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const valuetext = (value) => `${value}h`;
  console.log(value);

  const [params, setParams] = useState({
    all: true,
    date_from: moment().startOf("day"),
    date_to: null,
  });

  return (
    <div className="filter">
      <div className="filterData" id="range">
        <span className="filterName">Date</span>
        <div className="slideDown" style={{ position: "relative" }}>
          <DropDown className="iconSlideDown" />
          <input
            className="filterChoice unstyled"
            type="date"
            defaultValue={todayDate}
          />
        </div>
      </div>
      <div className="filterData">
        <span className="filterName">Range</span>
        <div className="filterChoice" style={{ position: "relative" }}>
          <DropDown className="iconSlideDown" />
          <select>
            <option value="1">1</option>
            <option value="7">7</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>

      <div className="filterData slider">
        <span className="filterName">Hours</span>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0}
          max={24}
        />
      </div>

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
      <ConfirmFilter className="checkedIcon" />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
