import React from "react";
import { Link } from "react-router-dom";
import { number } from "prop-types";
import PlanetsCounter from "./PlanetsCounter";

const Header = (props) => {

    const {shownPlanets, totalPlanets} = props;

    return (
        <header className="header-container">
            <Link to="/">
                <h3 className="header-link">
                    Planets
                </h3>
            </Link>
            <PlanetsCounter
                totalPlanets={totalPlanets}
                shownPlanets={shownPlanets}/>
        </header>
    );
};


Header.propTypes = {
    allPlanetsNumber: number,
    index: number
};

Header.defaultProps = {
    allPlanetsNumber: 0,
    index: 0
};
export default Header;
