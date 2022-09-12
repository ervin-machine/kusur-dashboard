import axios from "axios";
import { REACT_APP_API_URL, AUTH_KEY } from '../../../config/index'
const EMPLOYERS_PROFILE_ENDPOINT = '/employers/profile'
const yourConfig = {
    headers: {
        Authorization: "Bearer " + AUTH_KEY
    }
}


export const fetchEmployerProfile = () => {
    return axios.get(REACT_APP_API_URL, yourConfig)
    .then((res) => {
        console.log(res.data)
        return res
    })
}
