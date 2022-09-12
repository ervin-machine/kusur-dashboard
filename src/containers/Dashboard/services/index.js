import axios from "axios";
import { REACT_APP_API_URL, AUTH_KEY } from '../../../config/index'
const yourConfig = {
    headers: {
        Authorization: "Bearer " + AUTH_KEY
    }
}


export const fetchKusurData = () => {
    const res = await axios.get(REACT_APP_API_URL, yourConfig);
    console.log(res.data);
    return res;
}
