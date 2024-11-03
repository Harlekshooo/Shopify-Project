import React from "react";
import "./innovation.css";
import innovationVid1 from "../../assets/innovation-video1.webm";
import innovationVid2 from "../../assets/innovation-video2.webm";
import innovationVid3 from "../../assets/innovation-video3.webm";
import innovationVid4 from "../../assets/innovation-video4.webm";
import innovationRowImg1 from "../../assets/innovation-row-image1.avif";
import innovationRowImg2 from "../../assets/innovation-row-image2.avif";
import innovationRowImg3 from "../../assets/innovation-row-image3.avif";
import innovationRowImg4 from "../../assets/innovation-row-image4.avif";
import innovationRowImg5 from "../../assets/innovation-row-image5.avif";
import Slider from "react-slick";

const innovation = () => {
  const innovationSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 9500,
  };

  return (
    <div className="innovationContainer">
      <div className="innerInnovationContainer">
        <h3 className="innovationHeader">
          Shopify keeps you at the cutting edge
        </h3>
        <p className="innovatonParagraph">
          Our fleet of 4000+ world-class developers never stops leveraging on
          the latest tech to make your business stronger, faster and more
          successful.
        </p>

        <section className="innovationCardsContainer">
          <div className="innovationCard1">
            <Slider
              {...innovationSettings}
              className="innovationCard1ImgContainer"
            >
              <div className="innovationCard1ImgWrap">
                <video
                  autoPlay
                  muted
                  loop
                  src={innovationVid1}
                  className="innovationCard1Img"
                ></video>
              </div>
              <div className="innovationCard1ImgWrap">
                <video
                  autoPlay
                  muted
                  loop
                  src={innovationVid2}
                  className="innovationCard1Img"
                ></video>
              </div>
              <div className="innovationCard1ImgWrap">
                <video
                  autoPlay
                  muted
                  loop
                  src={innovationVid3}
                  className="innovationCard1Img"
                ></video>
              </div>
              <div className="innovationCard1ImgWrap">
                <video
                  autoPlay
                  muted
                  loop
                  src={innovationVid4}
                  className="innovationCard1Img"
                ></video>
              </div>
            </Slider>
            <div className="innovationCardDetailsContainer">
              <h5 className="innovationCardDetailsHeader">
                AI designed for commerce
              </h5>
              <p className="innovationCardDetailsParagraph">
                <a className="innovationCardDetailsLink" href="#">
                  Shopify Magic
                </a>{" "}
                taps the power of AI to save you time, whether its generating
                product content or suggesting ways to get the most out of
                Shopify.
              </p>
            </div>
          </div>

          <div className="innovationCard2">
            <div className="outerInnovationCard2ImgContainer">
              <div className="innovationCard2ImgContainer">
                <div className="innovationRowImg1Wrap">
                  <img
                    src={innovationRowImg1}
                    className="innovationRowImg1"
                    alt=""
                  />
                </div>
                <div className="innovationRowImg2Wrap">
                  <img
                    src={innovationRowImg2}
                    className="innovationRowImg2"
                    alt=""
                  />
                </div>
                <div className="innovationRowImg3Wrap">
                  <img
                    src={innovationRowImg3}
                    className="innovationRowImg3"
                    alt=""
                  />
                </div>
                <div className="innovationRowImg4Wrap">
                  <img
                    src={innovationRowImg4}
                    className="innovationRowImg4"
                    alt=""
                  />
                </div>
                <div className="innovationRowImg5Wrap">
                  <img
                    src={innovationRowImg5}
                    className="innovationRowImg5"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="innovationCard2DetailsContainer">
              <h5 className="innovationCardDetailsHeader">
                Nonstop innovation
              </h5>
              <p className="innovationCardDetailsParagraph">
                Every six months, Shopify rolls out 100s of{" "}
                <a className="innovationCardDetailsLink" href="#">
                  new features and upgrades
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default innovation;
