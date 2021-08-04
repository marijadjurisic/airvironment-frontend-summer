import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useDates from "../hooks/useDates";

const AllDataCardRow = ({ hour }) => {
  const { returnHour } = useDates();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  return (
    <>
      <div className="date-time-wrapper">{returnHour(hour.created)}h</div>
      <div className="values">
        {isSmallScreen ? Math.round(hour.temperature) : hour.temperature}
        &deg;C
      </div>
      <div className="values">
        {isSmallScreen ? Math.round(hour.humidity) : hour.humidity}
        %
      </div>
      <div className="values">
        {isSmallScreen
          ? Math.round(hour.pollution) / 100
          : (hour.pollution / 100).toFixed(2)}
        <span>ppb</span>
      </div>
    </>
  );
};

export default AllDataCardRow;
