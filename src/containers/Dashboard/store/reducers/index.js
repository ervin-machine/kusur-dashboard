import produce from 'immer'
import { types } from '../constants'

export const initialState = {
    profileData: {},
}

const employerClientReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch(action.type) {
            case types.FETCH_DATA_REQUEST:
                draft.isLoading = true;
                break;
            case types.FETCH_DATA_SUCCESS:
                draft.isLoading = false;
                draft.profileData = action.payload
                break;
            case types.FETCH_DATA_FAILURE:
                draft.isLoading = false;
                draft.errorMessage = true;
                draft.error = action.payload;
                break;
            default:
                break;
        }
    })

export default employerClientReducer