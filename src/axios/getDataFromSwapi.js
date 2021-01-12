import axios from "axios";

const getDataFromSwapi =( url, func )=> {
    axios.get(url)
        .then( ( response ) => {
            func(response.data);
        })
        .catch( ( error ) => {
            console.log('error in getAPIFromSwapi', error);
        })
};

export default getDataFromSwapi;
