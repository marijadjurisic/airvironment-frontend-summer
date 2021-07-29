import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons/index";

function MeasurementCard() {
  return (
    <div className="average-card-container-root">
      <div className="average-card-container">
        <span className="card-title">Wed</span>
        <span className="card-subtitle">24. Jul 2021</span>
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
                  <span>30C&deg;</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>15C&deg;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ 25C&deg;</span>
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
                  <span>15%</span>
                </div>
                <div className="value-container">
                  <LowValueIcon />
                  <span>12%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section section">
            <div className="right-section-content">
              <span>/ 15%</span>
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
                      0.3
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                  <div className="value-container pollution-value-container">
                    <LowValueIcon />
                    <span>
                      0.1
                      <sub className="left-section-sub">ppb</sub>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>
                  / 0.3
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
