import React from 'react'
import "./Postavke.css"
import InfoModal from '../PublicComponents/InfoModal/InfoModal'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Postavke() {
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <div className='postavke-container'>
            <div className='postavke-head'>
                <div style={{ display: "flex" }}>
                    <h2 className='postavke-title' style={{ color: "#3D44DB" }}>Opšte postavke</h2>
                    <h2 className='postavke-title' style={{ color: "#100F10CC" }}>Postavke aplikacije</h2>
                    <h2 className='postavke-title' style={{ color: "#100F10CC" }}>Sadržaj aplikacije</h2>
                    <h2 className='postavke-title' style={{ color: "#100F10CC" }}>Supskripcija</h2>
                </div>
                <hr />
            </div>
            <div className='postavke-form'>
                <TextField
                    style={{ width: "100%", height: "49px", marginTop: "15px"  }}
                    id="outlined-basic" label="Naziv kompanije*"
                    value={"Testing tenant"}
                    variant="outlined"
                /> <br />
                <FormControl style={{ width: "100%", height: "49px", marginTop: "26px" }}>
                    <InputLabel id="demo-simple-select-label">Kategorija</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Kategorija"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Hairdresser Salon</MenuItem>
                    </Select>
                </FormControl>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <FormControl style={{width: "165px", height: "49px", marginTop: "26px"}}>
                        <InputLabel id="demo-simple-select-label">Grad*</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Grad*"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Zenica</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField style={{ width: "165px", height: "49px", marginTop: "26px" }} value={"Prvomajska 2"} id="outlined-basic" label="Adresa" variant="outlined" />
                    <TextField style={{ width: "165px", height: "49px", marginTop: "26px" }} value={"72000"} id="outlined-basic" label="Poštanski broj" variant="outlined" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField style={{ width: "258px", height: "49px", marginTop: "26px" }} value="mail@tenant.com" id="outlined-basic" label="E-mail*" variant="outlined" />
                    <TextField style={{ width: "258px", height: "49px", marginTop: "26px" }} value="+38762447996" id="outlined-basic" label="Broj telefona" variant="outlined" />
                </div>
                <TextField style={{ width: "100%", height: "49px", marginTop: "26px" }} value="https://tenant.ch/" id="outlined-basic" label="Broj telefona" variant="outlined" />
            </div>
            <InfoModal />
        </div>
    )
}

export default Postavke