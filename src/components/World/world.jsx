import React from "react";
import "./world.css";
import worldImage1 from "../../assets/world-image1.avif";
import worldImage2 from "../../assets/world-image2.avif";
import worldImage3 from "../../assets/world-image3.png";
import worldImage4 from "../../assets/world-image4.png";
import worldImage5 from "../../assets/world-image5.png";
import worldPeopleImage1 from "../../assets/world-person-image1.avif";
import worldPeopleImage2 from "../../assets/world-person-image2.avif";
import worldPeopleImage3 from "../../assets/world-person-image3.avif";
import worldPeopleImage4 from "../../assets/world-person-image4.avif";
import worldPeopleImage5 from "../../assets/world-person-image5.avif";
import worldRatingImg from "../../assets/world-rating-image.webp";
import worldRatingVid from "../../assets/world-rating-video.webm";
import Slider from "react-slick";

const world = () => {
  const settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    // centerPadding: "5rem",
    slidesToShow: 3,
    autoplay: true,
    // slidesToScroll: 1,
    speed: 500,
  };

  const secondSettings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    // centerPadding: "5rem",
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    // slidesToScroll: 1,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
  }

  const peopleSettings = {
    // className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    // centerPadding:"5rem",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };

  return (
    <div className="worldContainer">
      <div className="worldInnerContainer">
        <section className="worldHeaderSecton">
          <a href="#" className="worldHeaderLink">
            Local and global
          </a>
          <h2 className="worldMainHeader">Grow around the world</h2>
        </section>

        <section className="worldBodySection">
          <div className="worldBodyCountriesContainer">
            <div className="peopleWorldSliderContainer">
              
            <Slider {...settings} className="worldCountriesFlagContainer">
              <div className="worldCountriesFlagWrap">
                <img src={worldImage1} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage2} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage3} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage4} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage5} className="worldCountriesFlag" alt="" />
              </div>
            </Slider>

            <Slider
              {...peopleSettings}
              className="worldCountriesPeopleContainer"
            >
              <div className="worldCountriesPeopleWrap">
                <img
                src={worldPeopleImage1}
                className="worldCountriesPeople"
                  alt=""
                />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage2}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage3}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage4}
                  className="worldCountriesPeople"
                  alt=""
                />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage5}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
            </Slider>
          </div>
            

            <div className="secondPeopleWorldSliderContainer">

            <Slider {...secondSettings} className="secondWorldCountriesFlagContainer">
              <div className="worldCountriesFlagWrap">
                <img src={worldImage1} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage2} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage3} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage4} className="worldCountriesFlag" alt="" />
              </div>
              <div className="worldCountriesFlagWrap">
                <img src={worldImage5} className="worldCountriesFlag" alt="" />
              </div>
            </Slider>

            <Slider
              {...peopleSettings}
              className="worldCountriesPeopleContainer"
            >
              <div className="worldCountriesPeopleWrap">
                <img
                src={worldPeopleImage1}
                className="worldCountriesPeople"
                  alt=""
                />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage2}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage3}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage4}
                  className="worldCountriesPeople"
                  alt=""
                />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
              <div className="worldCountriesPeopleWrap">
                <img
                  src={worldPeopleImage5}
                  className="worldCountriesPeople"
                  alt=""
                  />
                <button className="worldCountriesPeopleBtn">Buy now</button>
              </div>
            </Slider>
          </div>

            <div className="worldCountriesRatingContainer">
              {/* <img src={worldRatingImg} className="worldRatingImg" alt="" /> */}
              <video autoPlay muted loop src={worldRatingVid} className="wholesaleImg"></video>
            </div>
          </div>

          <div className="worldFooterContainer">
            <h5 className="worldFooterHeader">Sell and ship everywhere</h5>
            <p className="worldFooterParagraph">
              Shopify takes complexity out of international selling, from
              delivering products faster and more affordably with{" "}
              <a href="#" className="worldFooterLink">
                Shopify Shipping
              </a>{" "}
              to localizing your experience with{" "}
              <a href="#" className="worldFooterLink">
                Shopify Markets.
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default world;
