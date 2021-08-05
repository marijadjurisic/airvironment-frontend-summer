import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import { TemperatureIcon, HumidityIcon, PollutionIcon } from "../assets/icons";
import useDates from "../hooks/useDates";
import AllDataCardRow from "./AllDataCardRow";

const AverageCard = ({ dayData }) => {
  const { returnDate, returnDay } = useDates();
  const day = returnDay(dayData[0].created);
  const date = returnDate(dayData[0].created);

  return (
    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">{day}</div>
          <div className="date">{date}</div>
        </div>
        <div className="data-icon-wrapper">
          <TemperatureIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <HumidityIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <PollutionIcon className="data-icon" />
        </div>
      </div>
      {dayData.map((hour, index) => (
        <div
          className={`hour-data ${index % 2 === 1 ? "opacity" : ""}`}
          key={hour.id}
        >
          <AllDataCardRow hour={hour} />
        </div>
      ))}
    </div>
  );
};

export default AverageCard;
