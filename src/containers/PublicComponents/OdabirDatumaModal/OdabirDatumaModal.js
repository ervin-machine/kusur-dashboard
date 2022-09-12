import React from 'react'
import "./OdabirDatumaModal.css"
import TextField from '@mui/material/TextField';

function OdabirDatumaModal() {
    return (
        <div className='doabir-datuma-head'>
            <div style={{ display: "flex", marginLeft: "20px", marginTop: "10px" }}>
                <div>
                    <p className='odabir-datuma-text'>Danas</p>
                    <p className='ovaj-mjesec'>Ovaj mjesec</p>
                    <p className='ova-godina'>Ova godina</p>
                </div>
                <div style={{ marginLeft: "40px" }}>
                    <p className='odabir-datuma-text'>Ova sedmica</p>
                    <p className='odabir-datuma-text'>Prošli mjesec</p>
                    <p className='odabir-datuma-text'>Prošla godina</p>
                </div>
            </div>
            <hr style={{ border: "0.1px solid #EBECEE" }} />
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "20px"}}>
                <TextField
                    id="date"
                    label="Počevši od"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 124, height: 49 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Zaključeno sa"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 124, height: 49 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "25px"}}>
                <button className='primijeni-button'>Primijeni</button>
                <button className='ponisti-button'>Ponisti</button>
            </div>
        </div>
    )
}

export default OdabirDatumaModal