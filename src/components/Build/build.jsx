import React from "react";
import "./build.css";
import { RiUploadLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import buildImg2 from '../../assets/build-image2.webp'

const build = () => {
  return (
    <div className="buildContainer">
      <div className="buildInnerContainer">
        <div className="buildSection">
          <h1 className="buildHeader">
            There's no better place for you to build
          </h1>

          <section className="buildBodySection">
            <div className="buildBodyDetailsContainer">
              <h4 className="buildHeaderDetails">
                The world's best-converting checkout
              </h4>
              <div className="buildRatingDetailsContainer">
                <div className="buildDetailsRating1">
                  <hr className="buildRatingLine" />
                  <p className="buildDetailUpgrade">
                    <RiUploadLine className="buildUpgradeIcon" />
                    higher conversions
                  </p>
                  <h3 className="buildDetailRatingNumber">
                    15<sup className="buildDetailRatingSign">%</sup>
                  </h3>
                </div>

                <div className="buildDetailsRating2">
                  <hr className="buildRatingLine" />
                  <p className="buildDetailUpgrade">
                    <LuShoppingBag className="buildUpgradeIcon" />
                    high-intent shoppers
                  </p>
                  <h3 className="buildDetailRatingNumber">
                    150M<sup className="buildDetailRatingSign">+</sup>
                  </h3>
                </div>
              </div>

              <summary className="buildParagraphDetailsContainer">
                <hr className="buildParagraphDetailsLine"/>
                <p className="buildParagraphDetails">
                  <a href="#" className="buildLinkDetails">
                    shopify checkout
                  </a>{" "}
                  converts 15% higher on average than other commerce platforms and
                  exposes your brand to 150 million buy-ready shoppers.
                </p>
              </summary>

              <p className="buildFooterDetails">
                Based on external study with a Big Three global consulting firm
                in April, 2023
              </p>
            </div>

            <div className="buildBodyImageContainer">
                <img className="buildBodyImg" src={buildImg2} alt="" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default build;
