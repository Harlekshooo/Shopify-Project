import React from 'react'
import './sidebar.css'
import { FaChevronDown } from "react-icons/fa";

const sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className="sidebarInnerContainer">
        <section className="sidebarBody">
        <hr className='sidebarUpperLine' />
        <div className="sideBarListContainer">
          <h4 className="sidebarList">solutions <FaChevronDown className='sidebarListIcon' /></h4>
          <h4 className="sidebarList">pricing</h4>
          <h4 className="sidebarList">resources <FaChevronDown className='sidebarListIcon' /></h4>
          <h4 className="sidebarList">enterprise</h4>
          <h4 className="sidebarList">what's new <FaChevronDown className='sidebarListIcon' /></h4>
        </div>
        </section>

        <section className="sidebarFooter">
          <hr className='sidebarLowerLine' />
          <button className="sidebarLogin">Log in</button>
          <button className="sidebarTrial">Start free trial</button>
        </section>
      </div>
    </div>
  )
}

export default sidebar