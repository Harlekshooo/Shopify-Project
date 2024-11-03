import React, { useEffect, useRef, useState } from "react";
import "./backup.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import backupGroup1Image1 from "../../assets/backup-group1-image1.webp";
import backupGroup1Image2 from "../../assets/backup-group1-image2.webp";
import backupGroup1Image3 from "../../assets/backup-group1-image3.webp";
import backupGroup2Image1 from "../../assets/backup-group2-image1.webp";
import backupGroup2Image2 from "../../assets/backup-group2-image2.webp";
import backupGroup2Image3 from "../../assets/backup-group2-image3.webp";
import backupGroup3Image1 from "../../assets/backup-group3-image1.webp";
import backupGroup3Image2 from "../../assets/backup-group3-image2.webp";
import backupGroup3Image3 from "../../assets/backup-group3-image3.webp";
import backupGroup4Image1 from "../../assets/backup-group4-image1.webp";
import backupGroup4Image2 from "../../assets/backup-group4-image2.webp";
import backupGroup4Image3 from "../../assets/backup-group4-image3.webp";
import backupGroup5Image1 from "../../assets/backup-group5-image1.webp";
import backupGroup5Image2 from "../../assets/backup-group5-image2.webp";
import backupGroup5Image3 from "../../assets/backup-group5-image3.webp";

const backup = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 425 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  // const firstBackupRef = useRef()
  // const secondBackupRef = useRef()
  // const thirdBackupRef = useRef()
  // const fourthBackupRef = useRef()
  // const fifthBackupRef = useRef()

  const [stateRef, setStateRef] = useState("")
  const [refNumber, setRefNumber] = useState(1)
  const [previousRefNumber, setPreviousRefNumber] = useState(2)
  const [currentSlide, setCurrentSlide] = useState(1)


  return (
    <div className="backupContainer">
      <main className="backupInnerContainer">
        <h2 className="backupHeader">
          The one commerce platform behind it all
        </h2>

        <p className="backupParagraph">
          {/* <span ref={initialBackupRef} className={`${currentSlide == 1 ? "backupInnerParagraphGrey" : "backupInnerParagraphWhite"}`}>
            Shopify selling store.
          </span>{" "} */}
          <span className={`${currentSlide == 1 ? "backupInnerParagraphWhite" : "backupInnerParagraphGrey"}`}>
            Sell online and in person.
          </span>{" "}
          <span className={`${currentSlide == 2 ? "backupInnerParagraphWhite" : "backupInnerParagraphGrey"}`}>
            Sell locally and globally.
          </span>{" "}
          <span className={`${currentSlide == 3 ? "backupInnerParagraphWhite" : "backupInnerParagraphGrey"}`}>
            Sell direct and wholesale.
          </span>{" "}
          <span className={`${currentSlide == 4 ? "backupInnerParagraphWhite" : "backupInnerParagraphGrey"}`}>
            Sell on desktop and mobile.
          </span>
        </p>

        {/* <button onClick={() => }>Increase</button> */}

        <Carousel
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          responsive={responsive}
          draggable={true}
          autoPlay={true}
          // infinite={true}
          // customTransition="all ease-in-out 0.4s"
          rewind={true}
          rewindWithAnimation={true}
          beforeChange={(previousSlide, {currentSlide, onMove}) =>{
            
            // console.log(currentSlide);
            if (currentSlide == 4){
              setCurrentSlide(1)
            }else{
              setCurrentSlide(currentSlide + 1)
            }
            
            // setCurrentSlide(currentSlide + 1)

            // if(currentSlide == 4){
            //   setCurrentSlide(1)
            // }
            
          }}
          className="backupSliderContainer"
        >
          <div className="backupSliderGroup1">
            <div className="backupSliderGroup1Wrap">
              <img
                src={backupGroup1Image1}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup1Image2}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup1Image3}
                className="backupGroupImage"
                alt=""
              />
            </div>
          </div>

          <div className="backupSliderGroup2">
            <div className="backupSliderGroup2Wrap">
              <img
                src={backupGroup2Image1}
                className="backupGroupImageSlim"
                alt=""
              />

              <img
                src={backupGroup2Image2}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup2Image3}
                className="backupGroupImage"
                alt=""
              />
            </div>
          </div>

          <div className="backupSliderGroup3">
            <div className="backupSliderGroup3Wrap">
              <img
                src={backupGroup3Image1}
                className="backupGroupImageSlim"
                alt=""
              />

              <img
                src={backupGroup3Image2}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup3Image3}
                className="backupGroupImage"
                alt=""
              />
            </div>
          </div>

          <div className="backupSliderGroup4">
            <div className="backupSliderGroup4Wrap">
              <img
                src={backupGroup4Image1}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup4Image2}
                className="backupGroupImageSlim"
                alt=""
              />

              <img
                src={backupGroup4Image3}
                className="backupGroupImage"
                alt=""
              />
            </div>
          </div>

          <div className="backupSliderGroup5">
          <div className="backupSliderGroup5Wrap">
              <img
                src={backupGroup5Image1}
                className="backupGroupImage"
                alt=""
              />

              <img
                src={backupGroup5Image2}
                className="backupGroupImageSlim"
                alt=""
              />

              <img
                src={backupGroup5Image3}
                className="backupGroupImage"
                alt=""
              />
            </div>
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default backup;
