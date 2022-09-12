import React from 'react'
import "./DashboardCharts.css"
import LineCharts from '../../../PublicComponents/LineChart/LineChart'
import DonutChart from '../../../PublicComponents/DonutChart/DonutChart'
import BarCharts from '../../../PublicComponents/BarChart/BarChart'

function DashboardCharts(props) {
    const { data } = props
    return (
        <div className='dashboard-charts'>
            <LineCharts data={data} />
            <DonutChart data={data} />
            <BarCharts data={data} />
        </div>
    )
}

export default DashboardCharts