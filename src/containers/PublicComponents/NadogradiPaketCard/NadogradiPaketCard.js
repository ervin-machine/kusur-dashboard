import React from 'react'
import "./NadogradiPaketCard.css"

import trueIcon from "../../../assets/images/trueIcon.svg"
import prijava from "../../../assets/images/Prijava.svg"

function NadogradiPaketCard() {
    return (
        <div className='nadogradi-paket-card-section'>
            <div className='nadogradi-paket-card-content'>
                <p className='nadogradi-paket-card-text'>Trenutni aktivni paket:</p>
                <div style={{ displaay: "flex" }}>
                    <button className='nadogradi-paket-button-naziv'>BASIC</button>
                </div>
                <hr style={{ border: "0.1px solid #EBECEE", margin: "20px 21px 0px 21px" }} />
            </div>
            <div className='nadogradi-paket-card-footer'>
                <div>
                    <p className='nadogradi-paket-card-footer-text'>Želite Business paket?</p>
                </div>
                <div style={{ display: "flex" }}>
                    <img className='true-icon' src={trueIcon} alt="" />
                    <p className='nadogradi-paket-card-footer-text-1'>Napredni dashboard/statistika</p>
                </div>
                <div style={{ display: "flex" }}>
                    <img className='true-icon' src={trueIcon} alt="" />
                    <p className='nadogradi-paket-card-footer-text-1'>Neograničen broj poslovnica</p>
                </div>
                <div style={{ display: "flex" }}>
                    <img className='true-icon' src={trueIcon} alt="" />
                    <p className='nadogradi-paket-card-footer-text-1'>Ankete, baneri i još puno toga!</p>
                </div>
                <div>
                    <button className='nadogradi-button'>Nadogradi</button>
                    <img className='prijava-icon' src={prijava} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NadogradiPaketCard