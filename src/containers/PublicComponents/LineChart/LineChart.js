import React from 'react';
import "./LineChart.css"
import { pure } from 'recompose';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const datas = [
    {
        name: '2020',
        uv: 4000,
        pv: 0,
        amt: 2400,
    },
    {
        name: '2021',
        uv: 3000,
        pv: 0,
        amt: 2210,
    },
    {
        name: '2022',
        uv: 2000,
        pv: 200,
        amt: 2290,
    },
    {
        name: '2023',
        uv: 2780,
        pv: 0,
        amt: 2000,
    },
    {
        name: '2024',
        uv: 1890,
        pv: 0,
        amt: 2181,
    },
    {
        name: '2025',
        uv: 2390,
        pv: 0,
        amt: 2500,
    },
    {
        name: '2026',
        uv: 3490,
        pv: 0,
        amt: 2100,
    },
    {
        name: '2027',
        uv: 3490,
        pv: 0,
        amt: 2100,
    },
    {
        name: '2028',
        uv: 3490,
        pv: 0,
        amt: 2100,
    },
    {
        name: '2029',
        uv: 3490,
        pv: 0,
        amt: 2100,
    },
    {
        name: '2030',
        uv: 3490,
        pv: 0,
        amt: 2100,
    },
];

function LineCharts(props) {
    const { data } = props
    const [registrovaniKorisnici, setRegistrovaniKorisnici] = React.useState(10);

    const handleChange = (event) => {
        setRegistrovaniKorisnici(event.target.value);
    };

    console.log(data)
    return (
        <div className='line-chart'>
            <FormControl className='survey-content' style={{ maxWidth: "267px", height: "49px", margin: "26px 0px 30px 30px" }}>
                <InputLabel id="demo-simple-select-label">Odaberi anketu</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={registrovaniKorisnici}
                    label="Odaberi anketu"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Registrovanih korisnika</MenuItem>
                </Select>
            </FormControl>
            <div>
                <LineChart
                    width={602}
                    height={166}
                    data={datas}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#3D44DB" strokeWidth={3} activeDot={{ r: 10 }} />
                </LineChart>
            </div>

        </div>
    )
}

export default pure(LineCharts)