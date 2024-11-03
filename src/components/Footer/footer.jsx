import React from "react";
import "./footer.css";
import { FaShopify } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import footerImg from "../../assets/footer-image.svg"

const footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInnerContainer">
        <section className="footerUpperSection">
          <main className="footerLogoImgContainer">
            <FaShopify className="footerLogoImg" />
          </main>

          <main className="footerListContainer">
            <div className="footerListContent">
              <h4 className="footerListHeader">shopify</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">About</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Careers</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Investors</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Press and Media</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Partners</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Affiliates</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Legal</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Service Status</li>
                </a>
              </ul>
            </div>
            
            <div className="footerListContent">
              <h4 className="footerListHeader">support</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Merchant Support</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Help Center</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Help a Partner</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify Academy</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify Community</li>
                </a>
              </ul>
            </div>
            
            <div className="footerListContent">
              <h4 className="footerListHeader">developers</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify.dev</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">API Documentation</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Dev Degree</li>
                </a>
              </ul>
            </div>
            
            <div className="footerListContent">
              <h4 className="footerListHeader">products</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shop</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shop Pay</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify Plus</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify Fulfuilment</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Network</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Linkpop</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Shopify for Enterprise</li>
                </a>
              </ul>
            </div>
            
            <div className="footerListContent">
              <h4 className="footerListHeader">global impacts</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Sustainability</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Social Impact</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Build Black</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Build Native</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Research</li>
                </a>
              </ul>
            </div>
            
            <div className="footerListContent">
              <h4 className="footerListHeader">solutions</h4>
              <ul className="footerListItemContainer">
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Online Store Builder</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Website Builder</li>
                </a>
                <a href="#" className="footerListItemLink">
                  <li className="footerListItem">Ecommerce Website</li>
                </a>
              </ul>
            </div>
          </main>
        </section>

        <section className="footerLowerSection">
                <hr className="footerLowerLine" />
            <div className="footerClosingContainer">
                <div className="footerPrivacyContainer">
                  <div className="footerPrivacyCountryContainer"><p className="footerPrivacyItem"><RxGlobe /> USA <FaSortDown /></p></div>
                  <div className="footerPrivacyOthersContainer">
                    <p className="footerPrivacyItem">Terms of Service</p>
                    <p className="footerPrivacyItem">Privacy Policy</p>
                    <p className="footerPrivacyItem">Sitemap</p>
                    <p className="footerPrivacyItem">Privacy Choices</p>
                  </div>
                </div>

                <div className="footerSocialsContainer">
                    <div className="footerSocials1IconWrap"><FaFacebookF className="footerSocialsIcon" /></div>
                    <div className="footerSocialsIconWrap"><FaXTwitter className="footerSocialsIcon" /></div>
                    <div className="footerSocialsIconWrap"><FaYoutube className="footerSocialsIcon" /></div>
                    <div className="footerSocialsIconWrap"><FaInstagram className="footerSocialsIcon" /></div>
                    <div className="footerSocialsIconWrap"><FaTiktok className="footerSocialsIcon" /></div>
                    <div className="footerSocialsIconWrap"><FaLinkedin className="footerSocialsIcon" /></div>
                    <div className="footerSocials7IconWrap"><FaPinterestP className="footerSocialsIcon" /></div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default footer;
