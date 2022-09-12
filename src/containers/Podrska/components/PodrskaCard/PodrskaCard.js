import React from 'react'
import "./PodrskaCard.css"
import trueIcon from "../../../../assets/images/trueIcon.svg"
import prijava from "../../../../assets/images/Prijava.svg"

function PodrskaCard(props) {
    const { title, text, data, buttonClassname, iconClassname } = props
    return (
        <div className='podrska-card-head'>
            <div className='podrska-card-content'>
                <h1 className='podrska-card-title'>{title}</h1>
                <p className='podrska-card-text'>{text}</p>
                <div style={{ marginTop: "20px" }}>
                    {data.map(el => <div style={{ display: "flex", marginTop: "-25px" }}>
                        <img src={trueIcon} alt="" />
                        <h4 className='podrska-card-item-text'>{el}</h4>
                    </div>)}
                </div>
                <div>
                    <button className={buttonClassname}>Kontaktirajte nas</button>
                    <img className={iconClassname} src={prijava} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PodrskaCard