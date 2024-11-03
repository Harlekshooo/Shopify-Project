import React from "react";
import "./wholesale.css";
import wholeSaleVideo1 from "../../assets/wholesale-video1.webm";
import wholeSaleVideo2 from "../../assets/wholesale-video2.webm";

const wholesale = () => {
  return (
    <div className="wholesaleContainer">
      <div className="wholesaleInnerContainer">
        <section className="wholesaleHeaderSection">
          <a href="#" className="wholesaleHeaderLink">
            Direct and wholesale
          </a>
          <h2 className="wholesaleMainHeader">Find your forever customers</h2>
        </section>

        <section className="wholesaleBodySection">
          <div className="wholesaleImg1Container">
            <video autoPlay muted loop  src={wholeSaleVideo1} className="wholesaleImg"></video>
            <div className="wholesaleImgDetails">
              <h5 className="wholesaleImgHeader">
                Reach the right customers for less
              </h5>
              <p className="wholesaleImgMessage">
                Acquire new customers and keep them coming back for more with{" "}
                <a href="#" className="wholesaleImgLink">
                  integrated marketing tools
                </a>{" "}
                and{" "}
                <a href="#" className="wholesaleImgLink">
                  insightful analytics
                </a>
                .
              </p>
            </div>
          </div>

          <div className="wholesaleImg2Container">
            <video autoPlay muted loop  src={wholeSaleVideo2} className="wholesaleImg"></video>
            <div className="wholesaleImgDetails">
              <h5 className="wholesaleImgHeader">
                Unlock the new growth with B2B
              </h5>
              <p className="wholesaleImgMessage">
                Create{" "}
                <a href="#" className="wholesaleImgLink">
                  custom appearances for wholesale buyers
                </a>{" "}
                with flexible pricing, discounts, and payment terms.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default wholesale;
