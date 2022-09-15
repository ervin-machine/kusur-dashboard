import React, { useState } from 'react'
import "./DashboardStatistic.css"
import OdabirDatumaModal from '../../../PublicComponents/OdabirDatumaModal/OdabirDatumaModal'
import InfoCard from '../../../PublicComponents/InfoCard/InfoCard'
import PaketCard from '../../../PublicComponents/PaketCard/PaketCard'
import NadogradiPaketCard from '../../../PublicComponents/NadogradiPaketCard/NadogradiPaketCard'

import calendar from '../../../../assets/images/calendar.svg'
import chevronDown from '../../../../assets/images/chevron-down.svg'

function DashboardStatistic(props) {
    const { data } = props
    
    let infoData = []

    if(data && data.cards?.length > 0) {
        infoData = [
            {
                name: "Registrovanih korisnika",
                number: data.cards[0].value,
                text: "+8 ove sedmice"
            },
            {
                name: "Konektovanih korisnika",
                number: data.cards[1].value,
                text: "+8 ove sedmice"
            },
            {
                name: "Korisnika koji su imali transakcije",
                number: data.cards[2].value,
                text: "+8 ove sedmice"
            },
            {
                name: "Standardnih/nagradnih kupona utrošeno",
                number: data.cards[3].value,
                text: "+8 ove sedmice"
            },
            {
                name: "Sakupljenih/potrošenih bodova",
                number: data.cards[4].value,
                text: "+8 ove sedmice"
            },
            {
                name: "Broj downloada Android/iOS",
                number: data.cards[5].value,
                text: "+8 ove sedmice"
            },
        ]
    }
    const [isPaketClicked, setIsPacketClicked] = useState(false)
    const [isOdabirDatumaOpened, setIsOdabirDatumaOpened] = useState(false)

    const handlePacketClicked = () => {
        setIsPacketClicked(!isPaketClicked)
    }

    const handleOpenOdabirDatuma = () => {
        setIsOdabirDatumaOpened(!isOdabirDatumaOpened)
    }

    const RenderPaketCard = () => {
        if (isPaketClicked) {
            return (
                <div onClick={handlePacketClicked}>
                    <NadogradiPaketCard />
                </div>
            )
        }
        return (
            <div onClick={handlePacketClicked}>
                <PaketCard />
            </div>

        )
    }

    const RenderOdabirDatuma = () => {
        if (isOdabirDatumaOpened) {
            return (
                <OdabirDatumaModal />
            )
        }
        return null
    }
    
    return (
        <div class="container">
            <div className='dashboard-statistic'>
                <h1 className='dashboard-statistic-title'>Dashboard statistics</h1>
                <div className='dashboard-statistic-buttons'>
                    <div onClick={handleOpenOdabirDatuma}>
                        <img className='calendar-icon' src={calendar} alt="" />
                        <button className='dashboard-statistic-button left-button'>Ovaj mjesec</button>
                        <RenderOdabirDatuma />
                    </div>
                    <div>
                        <img className='chevron-down-icon' src={chevronDown} alt="" />
                        <button className='dashboard-statistic-button'>Poslovnica X</button>
                    </div>

                </div>
            </div>
            <hr style={{ marginLeft: "30px", marginRight: "32px", border: "0.1px solid #EBECEE" }} />
            <div className='dashboard-statistic-content'>
                <RenderPaketCard />
                <div className='info-cards'>
                    {infoData.map((el, index) =>
                        <InfoCard key={index} name={el.name} number={el.number} text={el.text} />
                    )}
                </div>
            </div>
        </div>

    )
}

export default DashboardStatistic