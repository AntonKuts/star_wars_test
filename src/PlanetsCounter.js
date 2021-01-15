import React from 'react';
import { number } from "prop-types";

const PlanetsCounter = (props) => {

    const {shownPlanets, totalPlanets} = props;

    return shownPlanets && totalPlanets
    ? (
        <div className="planets-counter">
            <p>{`Counter: ${shownPlanets}/${totalPlanets}`}</p>
        </div>
    )
    : '';
};

PlanetsCounter.propTypes = {
    totalPlanets: number,
    shownPlanets: number,
};

PlanetsCounter.defaultProps = {
    totalPlanets: 0,
    shownPlanets: 0,
};


export default PlanetsCounter;
