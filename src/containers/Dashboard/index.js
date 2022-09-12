import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import axios from "axios"
import { REACT_APP_API_URL, AUTH_KEY } from '../../config/index'

import "./Dashboard.css"
import DashboardStatistic from './components/DashboardStatistic/DashboardStatistic'
import DashboardCharts from './components/DashboardCharts/DashboardCharts'
import DashboardSurvey from './components/DashboardSurvey/DashboardSurvey'

import { selectProfileData } from "./store/selectors"

const yourConfig = {
    headers: {
        Authorization: "Bearer " + AUTH_KEY
    }
}


const Dashboard = React.memo(function Dashboard() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(REACT_APP_API_URL, yourConfig)
            .then((res) => {
                console.log(res.data)
                setData(res.data.payload)
            })
    }, [])

    console.log(data)
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
    profileData: selectProfileData(),
})


const withConnect = connect(mapStateToProps)

export default (withConnect)(Dashboard)