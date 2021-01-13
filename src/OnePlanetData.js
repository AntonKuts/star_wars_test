import React from 'react';
import { object, number } from "prop-types";

const OnePlanetData = (props) => {
    const { planetData, index } = props;
    const { name, climate = '', residents = '' } = planetData;
    return name
    ? (
        <div className="planet-data">
            <h3>{`Planet № ${index + 1}: ${name}`}</h3>
            <p>{`Planet climate: ${climate}`}</p>
            <p>{`Planet residents: ${residents[0]}`}</p>
        </div>
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
