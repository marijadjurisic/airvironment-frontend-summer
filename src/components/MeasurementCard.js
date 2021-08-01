import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import moment from "moment";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons/index";

function MeasurementCard({ averageValue }) {
  console.log(averageValue);
  return (
    <div className="average-card-container-root">
      <div className="average-card-container">
        <span className="card-title">
          {moment(averageValue.date, "DD.M.YYYY.").format("ddd")}
        </span>
        <span className="card-subtitle">
          {moment(averageValue.date, "DD.M.YYYY.").format("DD. MMM. YYYY")}
        </span>
        <hr />
        <div className="card-value-row">
          <div className="left-section section">
            <div className="left-section-content">
              <div className="image-left">
                <TemperatureSmallIcon />
              </div>
              <div className="left-section-content-right">
                <div className="value-container">
                  <HighValueIcon />
                  <span>{averageValue.maxTemperature}C&deg;</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>{averageValue.minTemperature}C&deg;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ {averageValue.averageTemperature}C&deg;</span>
            </div>
          </div>
        </div>
        <div className="card-value-row">
          <div className="left-section section">
            <div className="left-section-content">
              <div className="image-left">
                <HumiditySmallIcon />
              </div>
              <div className="left-section-content-right">
                <div className="value-container">
                  <HighValueIcon />
                  <span>{averageValue.maxHumidity}%</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>{averageValue.minHumidity}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ {averageValue.humidity}%</span>
            </div>
          </div>
        </div>
        <div>
          <div className="card-value-row">
            <div className="left-section section">
              <div className="left-section-content">
                <div className="image-left">
                  <PollutionSmallIcon />
                </div>
                <div className="left-section-content-right">
                  <div className="value-container pollution-value-container">
                    <HighValueIcon />
                    <span>
                      {averageValue.maxPollution}
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                  <div className="value-container pollution-value-container">
                    <LowValueIcon />
                    <span>
                      {averageValue.minPollution}
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>
                  / {averageValue.pollution}
                  <sub className="sub-pollution">ppb</sub>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementCard;
