import React, { useEffect } from "react";
import { AverageCard } from "../components/index";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";
import "../assets/styles/pages/Averages.scss";

function Averages({ averageValues, getAverageValues }) {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues]);

  return averageValues ? (
    <div className="averages-container">
      {averageValues.map((averageValue) => (
        <AverageCard averageValue={averageValue} key={averageValue.date} />
      ))}
    </div>
  ) : (
    <div />
  );
}

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ? state.averageValues : [],
  };
}

const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Averages);
