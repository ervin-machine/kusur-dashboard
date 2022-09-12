import React from 'react'
import "./LeftSidebar.css"
import logo from "../../assets/images/Kusur_logo_FINAL-white-01.svg"
import dashboardLogo from "../../assets/images/Dashboard.svg"
import loyalty from "../../assets/images/loyalty.svg"
import image from "../../assets/images/image.svg"
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TuneIcon from '@mui/icons-material/Tune';
import expandMoreIcon from "../../assets/images/expandMoreIcon.svg"

function LeftSidebar(props) {
  const { section } = props;
  
  return (
    <div className='left-sidebar-head'>
      <div className='left-sidebar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='left-sidebar-list'>
        <div className='left-sidebar-list-item' style={{ backgroundColor: section === "Dashboard" ? "#3D44DB" : "transparent", marginRight: "-20px"}}>
          <img src={dashboardLogo} alt="" />
          <h3 className='left-sidebar-list-item-text'>Dashboard</h3>
        </div>
        <div className='left-sidebar-list-item' style={{ marginBottom: "0px" }}>
          <img src={loyalty} alt="" style={{ marginTop: "0px"}} />
          <h3 className='left-sidebar-list-item-text'>Loyalty</h3>
          <img src={expandMoreIcon} alt="" style={{ marginTop: "0px", marginLeft: "108.5px"}} />
        </div>
        <div style={{ marginTop: "-20px"}}>
          {data1.map(el => <h3 className='left-sidebar-list-item-text' style={{ marginLeft: "53.5px", marginTop: "30px" }}>{el}</h3>)}
        </div>
        <div className='left-sidebar-list-item'>
          <StorefrontIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text' style={{ marginBottom: "0px" }}>Proizvodi</h3>
          <img src={expandMoreIcon} alt="" style={{ marginTop: "17px", marginLeft: "92.5px"}} />
        </div>
        <div>
          {data2.map(el => <h3 className='left-sidebar-list-item-text' style={{ marginLeft: "53.5px", marginTop: "30px" }}>{el}</h3>)}
        </div>
        <div className='left-sidebar-list-item'>
          <img src={image} alt="" style={{ marginTop: "17px"}} />
          <h3 className='left-sidebar-list-item-text' style={{ marginBottom: "0px" }}>Sadržaji</h3>
          <img src={expandMoreIcon} alt="" style={{ marginTop: "17px", marginLeft: "101.5px"}} />
        </div>
        <div>
          {data3.map(el => <h3 className='left-sidebar-list-item-text' style={{ marginLeft: "53.5px", marginTop: "30px" }}>{el}</h3>)}
        </div>
        <div className='left-sidebar-list-item'>
          <PeopleAltTwoToneIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text'>Korisnici aplikacije</h3>
        </div>
        <div className='left-sidebar-list-item'>
          <NotificationsActiveTwoToneIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text'>Notifikacije</h3>
        </div>
        <div className='left-sidebar-list-item'>
          <AssessmentIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text'>Anketa</h3>
        </div>
        <div className='left-sidebar-list-item'>
          <img src={image} alt="" />
          <h3 className='left-sidebar-list-item-text'>Baneri</h3>
        </div>
        <div className='left-sidebar-list-item'>
          <TextSnippetIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text'>Dokumenti</h3>
        </div>
        <div className='left-sidebar-list-item' style={{ backgroundColor: section === "Postavke" ? "#3D44DB" : "transparent"}}>
          <TuneIcon style={{ width: "18px", height: "18px", color: "white", marginTop: "16px" }} />
          <h3 className='left-sidebar-list-item-text' >Postavke</h3>
        </div>
      </div>
    </div>
  )
}

const data1 = ["Kuponi", "Pragovi", "Specijalni kuponi", "Transakcije", "Lokacije"]
const data2 = ["Lista proizvoda", "Kategorije"]
const data3 = ["Lista sadržaja", "Kategorije"]
export default LeftSidebar