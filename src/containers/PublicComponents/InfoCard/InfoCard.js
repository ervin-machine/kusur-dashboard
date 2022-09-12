import React from 'react'
import "./InfoCard.css"
import peoples from '../../../assets/images/peoples.svg'

function InfoCard(props) {
  const { key, name, number, text } = props
  return (
    <div className='info-card-section'>
      <div className='info-card-content' key={key}>
        <div className='info-card-icon'>
          <img src={peoples} alt="" style={{ margin: "23px 10px 46px 20px" }} />
        </div>
        <div style={{ marginLeft: "10px"}}>
          <p className='info-card-title'>{name}</p>
          <h2 className='info-card-number'>{number}</h2>
          <h4 className='info-card-new-consumer'>{text}</h4>
        </div>
      </div>
    </div>
  )
}

export default InfoCard