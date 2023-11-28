import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from '@assets/img/logo/logo.png';
import payment from '@assets/img/footer/footer-payment.png';
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div
      className={` col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
    >
      <div className={`mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul className="borderless">
            {contents.map((l, i) => (
              <li className="list-group-item bg-[#222222]  text-white" key={i}>
                <Link href={l.url}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const FooterEleven = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-black-revised"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row justify-content-between ">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                    <div className="footer__logo">
                      <Link href="/">
                        {/* <Image src={logo} alt="logo" /> */}
                        <Image height={90} width={150} src={'/assets/img/logo/logo.png'} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p className="text-white">
                          The electronics component company provides a wide range of products for electronic devices.
                        </p>
                        <div className="footer__social footer__social-11">
                          <SocialLinks />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SingleWidget
                  col="4"
                  col_2="4"
                  col_3="2"
                  title="Menu"
                  contents={[
                    { url: "/about-us", title: "About us" },
                    { url: "/blog", title: "Our Blog" },
                    { url: "/contact", title: "Contact" },
                    { url: "#manufactures", title: "Manufactures" },
                  ]}
                />
                {/* <SingleWidget
                  col="3"
                  col_2="3"
                  col_3="3"
                  title="Shop"
                  contents={[
                    { url: "#", title: "Game & Video" },
                    { url: "#", title: "Phone &Tablets" },
                    { url: "#", title: "Computers & Laptop" },
                    { url: "#", title: "Sport Watches" },
                    { url: "#", title: "Discounts" },
                  ]}
                /> */}
                <SingleWidget
                  col="4"
                  col_2="3"
                  col_3="4"
                  title="Support"
                  contents={[
                    { url: "/terms", title: "Terms And Conditions" },
                    { url: "/contact", title: "Contact Us" },
                  ]}
                />

                {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-11-5">
                    <h3 className="footer__widget-title">Talk To Us</h3>

                    <div className="footer__widget-content">
                      <p className="footer__text">
                        Find a location nearest you. See{" "}
                        <a href="#">Our Stores</a>
                      </p>
                      <div className="footer__contact">
                        <div className="footer__contact-call">
                          <span>
                            <a href="tel:624-423-26-72">+624 423 26 72</a>
                          </span>
                        </div>
                        <div className="footer__contact-mail">
                          <span>
                            <a href="mailto:support@harry.com">
                              support@harry.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-12  text-center">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterEleven;
