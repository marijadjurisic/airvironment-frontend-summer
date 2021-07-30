import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons/index";

function MeasurementCard({ data, fetchData }) {
  console.log(fetchData);
  return (
    <div className="average-card-container-root">
      <div className="average-card-container">
        <span className="card-title">{data.title}</span>
        <span className="card-subtitle">{data.subtitle}</span>
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
                  <span>{data.maxTemp}C&deg;</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>{data.minTemp}C&deg;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ {fetchData.temperature}C&deg;</span>
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
                  <span>{data.maxHum}%</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>{data.minHum}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ {fetchData.humidity}%</span>
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
                      {data.maxPol}
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                  <div className="value-container pollution-value-container">
                    <LowValueIcon />
                    <span>
                      {data.minPol}
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>
                  / {fetchData.pollution}
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
