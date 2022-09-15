import React from 'react'
import "./PaketCard.css"

import economic from "../../../assets/images/Economico.svg"

function PaketCard() {
    return (
        <div className='paket-card-section'>
            <div className='paket-card-content'>
                <p className='paket-card-text'>Trenutni aktivni paket:</p>
                <div style={{ displaay: "flex" }}>
                    <img src={economic} alt="" style={{ position: "absolute", marginTop: "14.74px", marginLeft: "18.73px" }} />
                    <button className='paket-button-naziv'>BUSINESS</button>
                </div>
            </div>
            <div style={{ marginTop: "65px", marginLeft: "18px"}}>
                <hr style={{ border: "0.1px solid #EBECEE", width: "265px" }} />
            </div>
            <div className='paket-card-footer'>
                <p className='paket-card-footer-text'>Hvala na povjerenju! Kusur tim.</p>
                <h4 className='paket-card-footer-text-1'>Paket aktivan do 15.10.2022. 15:38</h4>
            </div>
        </div>
    )
}

export default PaketCard