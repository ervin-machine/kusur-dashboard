import React from 'react'
import "./DashboardSurvey.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SurveyChart from '../../../PublicComponents/SurveyChart/SurveyChart';

function DashboardSurvey() {
    const [age, setAge] = React.useState(10);
    const [starosnaDob, setStarosnaDob] = React.useState(1)

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleStarosnaDob = (e) => {
        setStarosnaDob(e.target.value)
    }

    return (
        <div className='dashboard-survey-container'>
            <div className='dashboard-survey-section'>
                <div>
                    <FormControl className='survey-content' style={{ maxWidth: "341px", height: "49px", margin: "26px 0px 0px 20px" }}>
                        <InputLabel id="demo-simple-select-label">Odaberi anketu</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Odaberi anketu<"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Welcome Survey</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='survey-pitanja-content'>
                    <div className='survey-pitanja-head'>
                        <h3 className='survey-pitanja-title'>Odaberite pitanje</h3>
                        <div style={{ margin: "15px 0px 0px -5px" }}>
                            <div style={{ display: "flex" }}>
                                <input type="radio" id="rodjenje" name="pitanje" value="true" />
                                <label className='label-1' htmlFor="rodjenje">Kada ste rođeni?</label><br />
                            </div>
                            <div style={{ display: "flex" }}>
                                <input type="radio" id="kosa" name="pitanje" value="true" />
                                <label className='label-1' htmlFor="kosa">Da li perete kosu?</label><br />
                            </div>
                            <div style={{ display: "flex" }}>
                                <input type="radio" id="sarma" name="pitanje" value="true" />
                                <label className='label-1' htmlFor="sarma">Sarma ili burek?</label><br />
                            </div>
                            <div style={{ display: "flex" }}>
                                <input type="radio" id="kusur" name="pitanje" value="true" style={{ width: "21px", height: "21px"}} />
                                <label className='label-1' htmlFor="kusur">Koliko često koristite system Kusur primjer kako izgleda duže pitanje u dva ili više rodova gdje mi je lubenica svoj voz imaju?</label>
                            </div>
                        </div>
                    </div>
                    <SurveyChart />
                </div>
                <div className='survey-filter-head'>
                    <h3 className='survey-filter-title'>Filter</h3>
                    <div style={{ display: "flex", marginTop: "-10px", marginLeft: "-5px" }}>
                        <input type="checkbox" id="Muškarci" name="spol" value="Muškarci" style={{ marginTop: "12px" }} />
                        <label className='label-1' htmlFor="Muškarci">Muškarci</label><br />
                        <input type="checkbox" id="Žene" name="spol" value="Žene" style={{ marginLeft: "30px", marginTop: "12px" }} />
                        <label className='label-1' htmlFor="Žene">Žene</label><br />
                    </div>
                </div>
                <FormControl style={{ maxWidth: "311px", margin: "21px 0px 35px 20px", color: "#403F40" }}>
                    <InputLabel id="demo-simple-select-label">Starosna dob</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={starosnaDob}
                        label="Starosna Dob"
                        onChange={handleStarosnaDob}
                    >
                        <MenuItem value={1}>Sve starosne dobi</MenuItem>
                        <MenuItem value={2}>-17</MenuItem>
                        <MenuItem value={3}>18-24</MenuItem>
                        <MenuItem value={4}>25-34</MenuItem>
                        <MenuItem value={5}>35-44</MenuItem>
                        <MenuItem value={6}>45-54</MenuItem>
                        <MenuItem value={7}>55-64</MenuItem>
                        <MenuItem value={8}>64+</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='informacije-head'>
                <div className='informacije-content'>
                    <h3 className='informacije-title'>Informacije</h3>
                    <div>
                        <h3 className='informacije-text'>Korisnika učestvovalo u anketi:</h3>
                        <p className='informacije-text-1'>308</p>
                    </div>
                    <div>
                        <h3 className='informacije-text'>Ukupno bodova podijeljeno</h3>
                        <p className='informacije-text-1'>850</p>
                    </div>
                    <div>
                        <h3 className='informacije-text'>Prosjek godina glasača</h3>
                        <p className='informacije-text-1'>37.5</p>
                    </div>
                    <div>
                        <h3 className='informacije-text'>Datum objave ankete</h3>
                        <p className='informacije-text-1'>20. 08. 2021.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSurvey