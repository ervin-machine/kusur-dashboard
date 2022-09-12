import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import employerClientReducer from "../containers/Dashboard/store/reducers"

export default function createReducer(history, injectReducers = {}) {
    const rootReducer = combineReducers({
        employerClient: employerClientReducer,
        router: connectRouter(history),
        ...injectReducers
    })

    return rootReducer
}