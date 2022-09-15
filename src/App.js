import React, { useState } from 'react'
import "./App.css"
import LeftSidebar from "./layouts/LeftSidebar/index";
import Header from './layouts/Header/Header';
import Dashboard from "./containers/Dashboard";
import Podrska from './containers/Podrska';
import Postavke from './containers/Postavke';

function App() {
  const [section, setSection] = useState('Dashboard')

  const RenderSection = () => {
    if (section === "Dashboard") {
      return (
        <Dashboard setSection={setSection} />
      )
    }
    if (section === "Podrska") {
      return (
        <Podrska />
      )
    }
    if (section === "Postavke") {
      return (
        <Postavke />
      )
    }
    return null;
  }
  return (
    <div className="App">
      <LeftSidebar section={section} />
      <div className='main-content' style={{ width: "100%"}}>
        <Header section={section} setSection={setSection} />
        <RenderSection />
      </div>
    </div>
  );
}

export default App;
