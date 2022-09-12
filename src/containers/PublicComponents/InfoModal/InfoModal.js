import React from 'react'
import "./InfoModal.css"
import appStoreIcon from "../../../assets/images/app-store.png"
import gStoreIcon from "../../../assets/images/g-play.png"
import qrIcon from "../../../assets/images/qrcode.png"

function InfoModal() {
    return (
        <div className='info-modal-head'>
            <div className='info-modal-content'>
                <div className='info-modal-left-content'>
                    <h2 className='info-modal-left-title'>BeeCoinz mobile app</h2>
                    <div className='info-modal-download-content'>
                        <div>
                            <img src={qrIcon} alt="" /> <br />
                            <img src={appStoreIcon} alt="" style={{ marginTop: "20px" }} />
                        </div>
                        <div>
                            <img src={qrIcon} alt="" /> <br />
                            <img src={gStoreIcon} alt="" style={{ marginTop: "20px" }} />
                        </div>
                    </div>
                </div>
                <div className='vertical-line'></div>
                <div className='info-modal-right-content'>
                    <h2 className='info-modal-left-title'>Tenant QR</h2>
                    <div className='info-modal-pin-content'>
                        <img src={qrIcon} alt="" /> <br />
                        <img src={gStoreIcon} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <button className='download-button'>Download</button>
            </div>
        </div>
    )
}

export default InfoModal