import React, {useEffect, useState} from 'react';
import { string } from "prop-types";
import { useParams } from "react-router-dom";
import getDataFromSwapi from "./axios/getDataFromSwapi";
import ResidentData from './ResidentData';

const OnePlanetComponent = ({planetUrl}) => {

    let { id } = useParams();
    const planetIndex = Number(id) + 1;

    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        getDataFromSwapi(`${planetUrl}${planetIndex}/`, setPlanetData)
    }, [planetUrl, planetIndex]);

    const {
        name,
        climate,
        gravity,
        terrain,
        diameter,
        residents,
        population,
        rotation_period,
    } = planetData;

    return name
        ? (
            <>
                <h3>{`Planet ${planetIndex}: ${name}`}</h3>
                <p>{`Rotation period: ${rotation_period}`}</p>
                <p>{`Diameter: ${diameter}`}</p>
                <p>{`Climate: ${climate}`}</p>
                <p>{`Gravity: ${gravity}`}</p>
                <p>{`Terrain: ${terrain}`}</p>
                <p>{`Population: ${population}`}</p>
                {residents.length
                    ? (
                        <>
                        <br/>
                        <p>Residents:</p>
                            {residents.map(resident =>
                                <ResidentData
                                    key={resident}
                                    resident={resident} />)}
                        </>
                    )
                    : ''
                }
            </>
        )
        : '';
};

OnePlanetComponent.propTypes = {
    planetUrl: string,
};

OnePlanetComponent.defaultProps = {
    planetUrl: '',
};


export default OnePlanetComponent;
