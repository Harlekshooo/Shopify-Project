import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const header = ({ openSidebar, setOpenSidebar }) => {
  // const element = document.getElementsByClassName("headerContainer");

  // if(element.scrollHeight < "75px"){
  //   console.log('Yesss');
  // }

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="headerContainer">
      <div className="headerInnerContainer">
        <section className="headerLogoSection">
          <div className="headerLogoContainer">
            <img className="headerLogo" src={logo} alt="" />
          </div>

          <nav className="headerNavListContainer">
            <li className="headerNavList">
              solutions <FaChevronDown className="headerNavIcon" />
            </li>
            <li className="headerNavList">pricing</li>
            <li className="headerNavList">
              resources <FaChevronDown className="headerNavIcon" />
            </li>
            <li className="headerNavList">enterprise</li>
            <li className="headerNavList">
              what's new <FaChevronDown className="headerNavIcon" />
            </li>
          </nav>
        </section>

        <section className="menuSection">
          <a href="#" className="menuLogin">Log in</a>
          <div className="freeTrialContainer">
            <a href="#" className="freeTrial">
              Start free trial
            </a>
          </div>
          <div className="menuContainer" onClick={handleOpenSidebar}>
            {!openSidebar ? (
              <IoMenu className="menuIcon" />
            ) : (
              <IoMdClose className="menuIcon" />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default header;
