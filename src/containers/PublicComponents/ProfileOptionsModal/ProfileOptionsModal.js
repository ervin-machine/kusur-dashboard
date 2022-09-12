import React from 'react'
import "./ProfileOptionsModal.css"
import odjava from "../../../assets/images/odjava.svg"
import TuneIcon from '@mui/icons-material/Tune';
function ProfileOptionsModal() {
    return (
        <div className='profile-option-head'>
            <div className='profile-option-items'>
                <TuneIcon style={{ marginTop: "17px", width: "20px", height: "20px" }} />
                <h3 className='profile-option-item'>Postavke</h3>
            </div>
            <div className='profile-option-items'>
                <img src={odjava} alt="" />
                <h3 className='profile-option-item'>Odjava</h3>
            </div>
        </div>
    )
}

export default ProfileOptionsModal