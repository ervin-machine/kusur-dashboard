import { types } from "../constants"
import { fetchKusurData } from "../../services"


const fetchDataRequest = () => {
    return {
        type: types.FETCH_DATA_REQUEST
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload: data.data.payload
    }
}

const fetchDataFailure = (err) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload: err
    }
}

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest())
        try {
            const profile = await fetchKusurData()
            dispatch(fetchDataSuccess(profile))
        } catch(err) {
            dispatch(fetchDataFailure(err))
        }
    }
}
