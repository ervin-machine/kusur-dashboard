import React from 'react';
import "./BarChart.css"
import { pure } from 'recompose';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function BarCharts(props) {
    const { data } = props

    return (
        <div className='bar-chart-head'>
            <h3 className="bar-chart-title">Godine korisnika</h3>
            <BarChart
                style={{ marginTop: "50px"}}
                width={267}
                height={189}
                data={data && data.graphs?.length > 0 && data.graphs[1].graphValues}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3D44DB" />
            </BarChart>
        </div>
    );
}

export default pure(BarCharts);