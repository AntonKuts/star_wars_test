import React, { useState, useEffect } from 'react';
import getDataFromSwapi from "./axios/getDataFromSwapi";
import PlanetsCounter from './PlanetsCounter';
import PlanetsCatalog from './PlanetsCatalog';
import { MAINURL } from './constants';
import './css/StarWarsTest.css';

const StarWarsTest = () => {

    const [APIsFromSwapi, setAPIsFromSwapi] = useState({});
    const [planetsData, setPlanetsData] = useState({});

    useEffect(() => {
        getDataFromSwapi(MAINURL, setAPIsFromSwapi)
    }, []);

    useEffect(() => {
        getDataFromSwapi(APIsFromSwapi?.planets, setPlanetsData)
    }, [APIsFromSwapi?.planets]);

    const {count, results, next} = planetsData;

    return (
        <div className="main-container">
            <PlanetsCounter
                totalPlanets={count}
                shownPlanets={planetsData?.results?.length} />
            {results?.length ? <PlanetsCatalog results={results} next={next} /> : ''}
        </div>
    );
};

export default StarWarsTest;
