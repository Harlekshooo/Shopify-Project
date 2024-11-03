import React, { useState } from "react";
import Hero from "./Hero/hero";
import Backup from "./Backup/backup";
import Enterprise from "./Enterprise/enterprise";
import Online from "./Online/online";
import Wholesale from "./Wholesale/wholesale";
import World from "./World/world";
import Business from "./Business/business";
import Build from "./Build/build";
import Innovation from "./Innovation/innovation";
import Support from "./Support/support";
import Start from "./Start/start";
import Footer from "./Footer/footer";



// window.onscroll = () => {EntireContainer()}

const OtherComponents = ({turnBlack, setTurnBlack}) => {

  // const [scrollTop, setScrollTop] = useState(0)

  // const handleComponentScroll = e => {

  //   let result = e.currentTarget.scrollTop
  //   setScrollTop(result)
  // }
  // console.log(scrollTop);

 


  return (
    <div className='entireContainer'>
      <Hero />
      <Backup />
      <Enterprise />
      <Online />
      <Wholesale />
      <World />
      <Business />
      <Build />
      <Innovation />
      <Support />
      <Start />
      <Footer />
    </div>
  );
};

export default OtherComponents;
