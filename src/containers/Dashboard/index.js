import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useFetchKusurData } from "../../hooks/fetchKusurData"

import "./Dashboard.css"
import DashboardStatistic from './components/DashboardStatistic/DashboardStatistic'
import DashboardCharts from './components/DashboardCharts/DashboardCharts'
import DashboardSurvey from './components/DashboardSurvey/DashboardSurvey'

import { selectKusurData } from "./store/selectors"



const Dashboard = React.memo(function Dashboard() {
    const { data } = useFetchKusurData()

    return (
        <div className='dashboard-container'>
            <div className='dashboard-content'>
                <DashboardStatistic data={data} />
                <DashboardCharts data={data} />
                <DashboardSurvey />
                <div className='footer-head'>© 2022 All rights reserved. Kusur.</div>
            </div>
        </div>
    )
}
)
const mapStateToProps = createStructuredSelector({
    data: selectKusurData(),
})


const withConnect = connect(mapStateToProps)

export default (withConnect)(Dashboard)