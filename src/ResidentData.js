import React, {useEffect, useState} from 'react';
import { string } from "prop-types";
import getDataFromSwapi from "./axios/getDataFromSwapi";

const ResidentData = ({resident}) => {

    const [residentData, setResidentData] = useState({});
    const [openExtraData, setOpenExtraData] = useState(false);

    useEffect(() => {
        getDataFromSwapi(resident, setResidentData)
    }, [resident]);


    const {
        name,
        height = '',
        mass = '',
        gender = ''
    } = residentData;

    return name
    ? (
        <div className="resident-data" onClick={()=> setOpenExtraData(!openExtraData)}>
            <h3>{name}</h3>
            {openExtraData ?
                (
                    <>
                        <p>{`Height: ${height}`}</p>
                        <p>{`Mass: ${mass}`}</p>
                        <p>{`Gender: ${gender}`}</p>
                    </>
                )
                : ''}
        </div>
    )
    : '';
};

ResidentData.propTypes = {
    resident: string,
};

ResidentData.defaultProps = {
    resident: '',
};


export default ResidentData;
