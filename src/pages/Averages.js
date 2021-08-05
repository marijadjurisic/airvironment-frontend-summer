import React, { useEffect } from "react";
import { AverageCard } from "../components/index";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";
import "../assets/styles/pages/Averages.scss";

function Averages({ averageValues, getAverageValues, filters }) {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues]);

  return (
    <div className="averages-container">
      {averageValues &&
        averageValues.map((averageValue) => (
          <AverageCard
            averageValue={averageValue}
            key={averageValue.date}
            filters={filters}
          />
        ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ?? [],
    filters: state.selectedTypes,
  };
}

const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Averages);
