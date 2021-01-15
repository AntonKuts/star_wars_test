import React from 'react';
import { object, number } from "prop-types";
import { Link } from "react-router-dom";

const OnePlanetData = (props) => {

    const { planetData, index } = props;
    const { name, climate = '', population = '' } = planetData;

    return name
        ? (
            <Link to={`/planet/${index}/`}>
                <div className="planet-data">
                    <h3>{`${index + 1}: ${name}`}</h3>
                    <p>{climate}</p>
                    <p>{population}</p>
                </div>
            </Link>
        )
        : '';
};

OnePlanetData.propTypes = {
    planetData: object,
    index: number
};

OnePlanetData.defaultProps = {
    planetData: {},
    index: 0
};


export default OnePlanetData;
