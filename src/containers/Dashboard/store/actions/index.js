import { types } from "../constants"
import { getApplicants, getJob, getJobs, addJobs, updateJob, uploadFile, fetchEmployerProfile, fetchUserProfile, defaultEmployers, updateEmployer, createJob, getUploadedImage, changeStatus, getCompanyProfile, activateCompanyProfile, getJobsByStatus, startFollowingCompany, checkIsUserFollowing, unfollowCompany, linkToCompany, companyToLinkPhoto, acceptLinkToCompany, hireApplicant, addFavouriteApplicant, hideApplicant, deleteHireApplicant, deleteFavouriteApplicant, deleteHiddenApplicant, initInstagramFeed, getInstagramMediaFeed, declineLinkToCompany, getLinkedCompanies, updateApplicantNote } from "../../services"

import CookieHandlerInstance from "../../../../../utils/cookie"
import jwt_decode from "jwt-decode";
import axiosClient from "../../../../../utils/axios"

const fetchDataRequest = () => {
    return {
        type: types.FETCH_DATA_REQUEST
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload: res
    }
}

const fetchDataFailure = (err) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload: err
    }
}

export const fetchEmployerData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest())
        try {
            const profile = await fetchEmployerProfile()
            dispatch(fetchDataSuccess(profile))
        } catch(err) {
            dispatch(fetchDataFailure(err))
        }
    }
}
