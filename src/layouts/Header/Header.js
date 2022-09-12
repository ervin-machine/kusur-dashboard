import React, { useState } from 'react'
import "./Header.css"
import ProfileOptionsModal from '../../containers/PublicComponents/ProfileOptionsModal/ProfileOptionsModal'

import infoIcon from '../../assets/images/info-icon.svg'
import questionmark from '../../assets/images/questionmark.svg'
import humanIcon from '../../assets/images/human-icon.svg'
import LayersIcon from '@mui/icons-material/Layers';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Header(props) {
    const { section, setSection } = props
    const [isProfileModalOpened, setIsProfileModalOpened] = useState(false)

    const handleOpenProfileModal = () => {
        setIsProfileModalOpened(!isProfileModalOpened)
    }

    const RenderModal = () => {
        if (isProfileModalOpened) {
            return <ProfileOptionsModal />
        }
        return null;
    }

    return (
        <div>
            <div className='header-head'>
                <div className='header-content' onClick={() => setSection("Postavke")}>
                    <p className='header-info'>Info</p>
                    <img className='info-icon' src={infoIcon} alt="" />
                </div>
                <div onClick={() => setSection("Podrska")}>
                    <img className='questionmark-icon' src={questionmark} alt="" />
                    <button className='header-button-podrska'>Podrška</button>
                </div>
                <div onClick={handleOpenProfileModal}>
                    <img className='human-icon' src={humanIcon} alt="" />
                    <button className='header-button-podrska'>Korisnik</button>

                </div>
                <RenderModal />
            </div>
            <hr style={{ border: "0.1px solid #EBECEE" }} />
            <div className='section-type'>
                <LayersIcon style={{ marginTop: "12px", color: "#EBECEE", width: "20px", height: "20px" }} />
                <ChevronRightIcon style={{ marginTop: "12px", marginLeft: "10px", color: "#EBECEE", width: "20px", height: "20px" }} />
                <p className='section-text'>{section}</p>
            </div>
            <div style={{ marginTop: "-10px"}}>
                <hr style={{ border: "1px solid #EBECEE" }} />
            </div>
        </div>
    )
}

export default Header