import React, { useState, useEffect } from 'react';
import { array, string } from "prop-types";
import getDataFromSwapi from "./axios/getDataFromSwapi";
import OnePlanetData from './OnePlanetData';

const PlanetsCatalog = (props) => {
    const { results, next } = props;
    const [shownPlanets, setShownPlanets] = useState(results);
    const [nextLinkForMore, setNextLinkForMore] = useState(next);

    const addMorePlanets = newPlanetsData => {
        setShownPlanets([...shownPlanets, ...newPlanetsData.results]);
        setNextLinkForMore(newPlanetsData.next);
    };

    const getMorePlanets = url => getDataFromSwapi(url, addMorePlanets);

    return shownPlanets?.length
    ? (
        <div className="planets-catalog">
            {shownPlanets.map((planetData, index) =>
                <OnePlanetData
                    key={planetData.name}
                    index={index}
                    planetData={planetData} />)}
            {nextLinkForMore
                ? (
                    <button onClick={()=> getMorePlanets(nextLinkForMore)}>
                        More planets
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
