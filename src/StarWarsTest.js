import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnePlanetComponent from "./OnePlanetComponent";
import Header from "./Header";
import getDataFromSwapi from "./axios/getDataFromSwapi";
import { MAINURL } from "./constants";
import PlanetsCatalog from "./PlanetsCatalog";

const StarWarsTest = () => {

    const [planetUrl, setPlanetUrl] = useState('');
    const [planetsData, setPlanetsData] = useState({});
    const [shownPlanets, setShownPlanets] = useState([]);

    const { results, next, count } = planetsData;

    const setAPIsFromSwapi = APIsFromSwapi => setPlanetUrl(APIsFromSwapi?.planets);

    useEffect(() => {
        getDataFromSwapi(MAINURL, setAPIsFromSwapi)
    }, []);

    useEffect(() => {
        getDataFromSwapi(planetUrl, setPlanetsData)
    }, [planetUrl]);

    useEffect(() => {
        setShownPlanets(results)
    }, [results, results?.length]);

    return (
        <Router>
            <div className="main-container">
                <Header
                    totalPlanets={count}
                    shownPlanets={shownPlanets?.length}
                />
                <Switch>
                    <Route path="/planet/:id">
                        <OnePlanetComponent planetUrl={planetUrl} />
                    </Route>
                    <Route path="/">
                        {shownPlanets?.length
                            ? <PlanetsCatalog
                                next={next}
                                shownPlanets={shownPlanets}
                                setShownPlanets={setShownPlanets}
                            />
                            : <p>Loading...</p>}
                    </Route>
                </Switch>
            </div>
        </Router>
    );

};


export default StarWarsTest;
