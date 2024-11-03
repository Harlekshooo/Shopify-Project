import React from "react";
import "./enterprise.css";
import Slider from "react-slick";
import enterpriseSliderImg1 from "../../assets/entrepreneur-slider-img1.webp";
import enterpriseSliderImg2 from "../../assets/entrepreneur-slider-img2.webp";
import enterpriseSliderImg3 from "../../assets/entrepreneur-slider-img3.webp";

const enterprise = () => {
  const settings = {
    className:"center",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 5000,
    // autoplay:false,
    // cssEase: "linear",
  };

  return (
    <div className="enterpriseContainer">
      <div className="enterpriseInnerContainer">
        <div className="enterpriseDetailContainer">
          <h2 className="enterpriseDetailHeader">
            For everyone from entrepreneurs to enterprise
          </h2>
          <p className="enterpriseDetailParagraph">
            Millions of merchnts of every size have collectively made over
            $1,000,000,000,000 in sales on Shopify
          </p>
        </div>

        <Slider {...settings} className="enterpriseSliderContainer">
          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg1}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">
                Get started fast
              </h4>
              <p className="enterpriseSliderDetailsMessage">
                Solo seller Megan Bre Camp started Summer Solace Tallow to sell
                her online candles and skincare online and at local farmers
                markets.
              </p>
            </div>
          </div>

          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg2}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">
                Grow as big as you want
              </h4>
              <p className="enterpriseSliderDetailsMessage">
                Atleisure brand Gymshark grew from working out of a garage to
                the global juggernaut it is today with $500M+ sales annually.
              </p>
            </div>
          </div>

          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg3}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">Raise the bar</h4>
              <p className="enterpriseSliderDetailsMessage">
                With the help of Shopify for enterprise, Mattel sells their
                iconic toys direct to customers around the world.
              </p>
            </div>
          </div>
        </Slider>
        
        <div className="enterpriseStaticContainer">
          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg1}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">
                Get started fast
              </h4>
              <p className="enterpriseSliderDetailsMessage">
                Solo seller Megan Bre Camp started Summer Solace Tallow to sell
                her online candles and skincare online and at local farmers
                markets.
              </p>
            </div>
          </div>

          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg2}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">
                Grow as big as you want
              </h4>
              <p className="enterpriseSliderDetailsMessage">
                Atleisure brand Gymshark grew from working out of a garage to
                the global juggernaut it is today with $500M+ sales annually.
              </p>
            </div>
          </div>

          <div className="enterpriseSliderCard">
            <div className="enterpriseSliderImgContainer">
              <img
                src={enterpriseSliderImg3}
                alt=""
                className="enterpriseSliderImg"
              />
            </div>
            <div className="enterpriseSliderDetailsContainer">
              <h4 className="enterpriseSliderDetailsHeader">Raise the bar</h4>
              <p className="enterpriseSliderDetailsMessage">
                With the help of Shopify for enterprise, Mattel sells their
                iconic toys direct to customers around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="enterprisePlanBtnContainer">
          <button className="enterprisePlanBtn">Pick a plan that fits</button>
        </div>
      </div>
    </div>
  );
};

export default enterprise;
