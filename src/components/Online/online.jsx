import React from "react";
import "./online.css";
import onlineImg1 from "../../assets/online-image1.png";
import onlineDesktopVid from "../../assets/online-desktop-video.webm";
import onlineMobileVid from "../../assets/online-mobile-video.webm";
import onlineImg2 from "../../assets/online-image2.webp";
import onlineImg3 from "../../assets/online-image3.webp";
import onlineImg4 from "../../assets/online-image4.webp";

const online = () => {
  return (
    <div className="onlineContainer">
      <div className="onlineInnerContainer">
        <section className="onlineHeaderSection">
          <div className="onlineHeaderContainer">
            <a href="#" className="onlineHeaderLink">
              Online and in person
            </a>
            <h2 className="onlineMainHeader">
              Sell here, there, and everywhere
            </h2>
          </div>
          <div className="onlineParagraphContainer">
            <p className="onlineParagraph">
              Get a stunning store that's made to sell--whether you build from
              scatch or you sart fast with pre-built themes.
            </p>
          </div>
        </section>

        <section className="onlineImgSecton">
          <div className="onlineMainImgContainer">
            <div className="onlineImgContainer1">
              {/* <img className="onlineImg1" src={onlineImg1} alt="" /> */}
              <video autoPlay muted loop  src={onlineMobileVid} className="onlineImg1"></video>
              <video autoPlay muted loop  src={onlineDesktopVid} className="onlineDesktopImg1"></video>
            </div>
          </div>

          <div className="onlineOtherImgContainer">
            <div className="otherOnlineImgCard">
              <img src={onlineImg2} alt="" className="otherOnlineImg" />
              <div className="onlineImg1Details">
                <h5 className="onlineImg1Header">In-person point of sale</h5>
                <p className="onlineImg1Message">
                  Sell face to face and keep offline and online sales in sync
                  with{" "}
                  <a href="#" className="onlineImg1Link">
                    Shopify POS
                  </a>
                </p>
              </div>
            </div>

            <div className="otherOnlineImgCard">
              <img src={onlineImg3} alt="" className="otherOnlineImg" />
              <div className="onlineImg1Details">
                <h5 className="onlineImg1Header">Publish across channels</h5>
                <p className="onlineImg1Message">
                  Show up where shoppers scroll, search, and shop with{" "}
                  <a href="#" className="onlineImg1Link">
                    multichannel integration
                  </a>
                </p>
              </div>
            </div>

            <div className="otherOnlineImgCard">
              <img src={onlineImg4} alt="" className="otherOnlineImg" />
              <div className="onlineImg1Details">
                <h5 className="onlineImg1Header">Powered by the world's best checkout</h5>
                <p className="onlineImg1Message">
                 <a href="#" className="onlineImg4Link">Shopify checkout</a> is fast, fully customizable and optimed to close more sales.      
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default online;
