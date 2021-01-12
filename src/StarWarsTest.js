import React, { useState, useEffect } from 'react';
import getDataFromSwapi from "./axios/getDataFromSwapi";
import { MAINURL } from './constants';
import './css/StarWarsTest.css';

const StarWarsTest = () => {

    const [APIFromSwapi, setAPIFromSwapi] = useState({});

    useEffect(() => {
        getDataFromSwapi(MAINURL, setAPIFromSwapi)
    }, []);

    console.log('APIFromSwapi -- ', APIFromSwapi);

    return (
        <div className="main-container">
        </div>
    );
};

export default StarWarsTest;
