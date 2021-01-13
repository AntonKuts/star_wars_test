import axios from "axios";

const getDataFromSwapi =( url = '', func )=> {
    if (!url) return '';
    axios.get(url)
        .then( ( response ) => {
            func(response.data);
        })
        .catch( ( error ) => {
            console.log('error in getAPIFromSwapi', error);
        })
};

export default getDataFromSwapi;
