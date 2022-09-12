import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import kusurDataReducer from "../containers/Dashboard/store/reducers"

export default function createReducer(history, injectReducers = {}) {
    const rootReducer = combineReducers({
        kusurData: kusurDataReducer,
        router: connectRouter(history),
        ...injectReducers
    })

    return rootReducer
}