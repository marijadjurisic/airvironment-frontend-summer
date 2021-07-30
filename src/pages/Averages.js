import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components/index";

function Averages() {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.live/api/measurements").then((response) =>
      response.json().then((r) => setFetchData(r.response))
    );
  }, []);
  console.log(fetchData);
  const data = {
    title: "Wed",
    subtitle: "24. Jul 2021",
    minTemp: 14,
    maxTemp: 30,
    minHum: 12,
    maxHum: 40,
    minPol: 0.1,
    maxPol: 0.3,
  };

  return fetchData.length ? (
    <div className="averages-container">
      {fetchData.map((card) => (
        <MeasurementCard data={data} fetchData={card} key={card.id} />
      ))}
    </div>
  ) : (
    <div />
  );
}

export default Averages;
