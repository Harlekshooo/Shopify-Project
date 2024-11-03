import React from "react";
import "./support.css";
import supportImg from "../../assets/support-image.webp"

const support = () => {
  return (
    <div className="supportContainer">
      <div className="supportInnerContainer">
        <section className="supportDetailsSection">
          <h2 className="supportDetailsHeader">Shopify has your back</h2>
          <p className="supportDetailsParagraph">
            Whether you need help expanding the team, ramping up marketing, or
            keeping surprise best seller in stock,{" "}
            <a href="##" className="supportDetailsLink">
              shopify capital
            </a>{" "}
            is here to lend a hand.
          </p>

        <div className="supportDetailsFinanceOuterContainer">
        <div className="supportDetailsFinanceContainer">
            <hr className="supportDetailsFinanceLine" />
            <main className="supportDetailsInnerFinanceContainer">
                <h4 className="supportDetailsFinanceHeader">$5B loaned out so far</h4>
                <p className="supportDetailsFinanceParagraph">Invested in shopify merchants</p>
            </main>
          </div>
          <div className="supportDetailsFinanceContainer">
            <hr className="supportDetailsFinanceLine" />
            <main className="supportDetailsInnerFinanceContainer">
                <h4 className="supportDetailsFinanceHeader">Loans up to $2M</h4>
                <p className="supportDetailsFinanceParagraph">Offer tailored to meet your needs</p>
            </main>
          </div>
          <div className="supportDetailsFinanceContainer">
            <hr className="supportDetailsFinanceLine" />
            <main className="supportDetailsInnerFinanceContainer">
                <h4 className="supportDetailsFinanceHeader">0% equity</h4>
                <p className="supportDetailsFinanceParagraph">No stake taken--ever</p>
            </main>
          </div>
        </div>
        </section>

        <section className="supportImgSection">
            <div className="supportImgContainer">
                <img src={supportImg} className="supportImg" alt="" />
            </div>
            <div className="supportImgNoteContainer">
                <article className="supportImgNote">"Shopify Capital has given us the funding we need to stock up on inventory and grow rapidly."</article>
                <article className="supportImgDetails">
                    <h4 className="supportImgName">jessica wise</h4>
                    <h4 className="supportImgPosition">CEO,<a href="##" className="supportImgLinkPosition">hell babes</a></h4>
                </article>
            </div>
        </section>
      </div>
    </div>
  );
};

export default support;
