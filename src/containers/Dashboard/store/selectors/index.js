import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectEmployer = state => state.employerClient

const selectProfileData = () => createSelector(selectEmployer, selectEmployer => get(selectEmployer, 'profileData'))

export { selectProfileData }
