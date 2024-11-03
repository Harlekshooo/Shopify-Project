import React from "react";
import "./hero.css";
import Header from "../Header/header";
import heroVideo from "../../assets/hero-video.webm";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";

const hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed:1000,
    autoplaySpeed:3000,
    autoplay: true,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };

  return (
    <div className="heroContainer">
      <div className="heroInnerContainer">
        <div className="heroVideoContainer">
          <video
            autoPlay
            muted
            loop
            src={heroVideo}
            className="heroVideo"
          ></video>
        </div>

        <div className="heroBodyContainer">
          <section className="heroHeaderContainer">
            <h1 className="heroMainHeader">Be the next</h1>
            <Slider {...settings} className="heroSlidingHeaderContainer">
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">big thing</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">one to watch</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">category creator</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">unicorn startup</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">household name</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">global empire</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">solo flier</h1></div>
              <div className="heroSlidingHeaderWrap"><h1 className="heroSlidingHeader">store they line up for</h1></div>
            </Slider>
          </section>

          <div className="heroParagraphSection">
            <p className="heroParagraph">
              Dream big, build fast, and grow far on{" "}
              <span className="heroInnerParagraph">shopify.</span>
            </p>
          </div>

          <section className="heroFooter">
            <div className="innerHeroFooter">
              <button className="heroFooterTrial">Start free trial</button>
              <p className="heroFooterParagraph">Get 3 days free then 1 month for $1</p>
            </div>
            <button className="heroFooterBuild"><FaPlay className="heroFooterIcon" />Why we build Shopify</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default hero;
