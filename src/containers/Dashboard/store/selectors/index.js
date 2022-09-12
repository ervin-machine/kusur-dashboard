import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectData = state => state.kusurData

const selectKusurData = () => createSelector(selectData, selectData => get(selectData, 'data'))

export { selectKusurData }
