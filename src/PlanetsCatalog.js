import React, { useState } from 'react';
import { array, string } from "prop-types";
import getDataFromSwapi from "./axios/getDataFromSwapi";
import OnePlanetData from './OnePlanetData';

const PlanetsCatalog = (props) => {

    const { next, shownPlanets, setShownPlanets } = props;

    const [nextLinkForMore, setNextLinkForMore] = useState(next);

    const addMorePlanets = newPlanetsData => {
        setShownPlanets([...shownPlanets, ...newPlanetsData.results]);
        setNextLinkForMore(newPlanetsData.next);
    };

    return shownPlanets?.length
        ? (
            <div className="planets-catalog">
                <div className="planet-data-topic">
                    <h3>Planet</h3>
                    <p>Climate</p>
                    <p>Population</p>
                </div>
                {shownPlanets.map((planetData, index) =>
                    <OnePlanetData
                        key={planetData.name}
                        index={index}
                        planetData={planetData} />)}
                {nextLinkForMore
                    ? (
                        <button
                            className="get-more-planets-button"
                            onClick={()=> getDataFromSwapi(nextLinkForMore, addMorePlanets)}
                        >
                            <h3>Load more</h3>
                        </button>
                    )
                    : ''
                }
            </div>
        )
        : '';
};

PlanetsCatalog.propTypes = {
    results: array,
    next: string,
};

PlanetsCatalog.defaultProps = {
    results: [],
    next: '',
};


export default PlanetsCatalog;
