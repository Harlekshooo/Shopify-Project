import React from "react";
import "./business.css";
import businessImg1 from "../../assets/business-image1.webp"
import businessImg2 from "../../assets/business-image2.webp"

const business = () => {
  return (
    <div className="businessContainer">
      <div className="businessInnerContainer">
        <section className="businessHeaderSection">
          <a href="#" className="businessHeaderLink">
            Desktop and mobile
          </a>
          <h2 className="businessMainHeader">Take care of business</h2>
        </section>

        <section className="businessBodySection">
            <div className="businessBodyCard1">
                <img src={businessImg1} className="businessImg1" alt="" />
                <div className="businessBodyDetails">
                <h5 className="businessBodyHeader">Manage everything in one place</h5>
                <p className="businessBodyParagraph">From back office to front of your store, you are always in control with the fully centralized <a href="#" className="businessBodyLink">Shopify Admin</a></p>
                </div>
            </div>

            <div className="businessBodyCard2">
                <img src={businessImg2} className="businessImg1" alt="" />
                <div className="businessBodyDetails">
                <h5 className="businessBodyHeader">Run your store from anywhere</h5>
                <p className="businessBodyParagraph">Do it right from your pocket eith the full featured <a href="#" className="businessBodyLink">Shopify mobile app</a></p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default business;
