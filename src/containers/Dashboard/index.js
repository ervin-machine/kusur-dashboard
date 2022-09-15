import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import "./Dashboard.css"
import DashboardStatistic from './components/DashboardStatistic/DashboardStatistic'
import DashboardCharts from './components/DashboardCharts/DashboardCharts'
import DashboardSurvey from './components/DashboardSurvey/DashboardSurvey'

import { selectKusurData } from "./store/selectors"
import { fetchData } from "./store/actions/index"

const Dashboard = React.memo(function Dashboard(props) {
    const { fetchData, kusurData }  = props

    useEffect(() => {
        fetchData()
    }, [fetchData])
 
    return (
        <div class="container">
            <div className='dashboard-content'>
                <DashboardStatistic data={kusurData} />
                <DashboardCharts data={kusurData} />
                <DashboardSurvey />
                <div className='footer-head'>© 2022 All rights reserved. Kusur.</div>
            </div>
        </div>
    )
}
)
const mapStateToProps = createStructuredSelector({
    kusurData: selectKusurData(),
})

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        },
    }
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default (withConnect)(Dashboard)