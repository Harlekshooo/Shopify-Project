import React from "react";
import "./start.css";
import startImg1 from "../../assets/start-image1.webp"
import startImg2 from "../../assets/start-image2.webp"

const start = () => {
  return (
    <div className="startMainContainer">
      <div className="startContainer">
        <div className="startInnerContainer">
          <h2 className="startHeader">Start selling in no time</h2>
          <div className="startBodyContainer">
            <section className="startImgContainer">
              <div className="startImg1Container">
                <img src={startImg1} className="startImg" alt="" />
              </div>
              <div className="startImg2Container">
                <img src={startImg2} className="startImg" alt="" />
              </div>
            </section>

            <section className="startDetailsContainer">
              <div className="startSerialDetails">
                <h4 className="startSerialHeader">01</h4>
                <div className="startSerialParagraphContainer">
                  <h3 className="startSerialParagraph">
                    Add your first product
                  </h3>
                  <hr className="startSerialParagraphLine" />
                </div>
              </div>

              <div className="startSerialDetails">
              <h4 className="startSerialHeader">02</h4>
                <div className="startSerialParagraphContainer">
                  <h3 className="startSerialParagraph">
                    Customize your store
                  </h3>
                  <hr className="startSerialParagraphLine" />
                </div>
              </div>

              <div className="startSerialDetails">
              <h4 className="startSerialHeader">03</h4>
                <div className="startSerialParagraphContainer">
                  <h3 className="startSerialParagraph">
                    Set up payments
                  </h3>
                </div>
              </div>
            <button className="startDetailsBtn">Take your shot</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default start;
