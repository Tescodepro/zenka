import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import SocialLinks from '@components/social';
import { Call, Email, LocationTwo, Opening } from '@svg/index';
import logo_black from '@assets/img/logo/logo-black.svg';
import CopyrightText from './component/copyright-text';
import logo from "@assets/img/logo/logoeski.png";


const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div className={`footer__area ${style_2 ? 'footer__style-3' : ''}`}
          data-bg-color={`footer-bg-${style_2 ? 'grey-4' : 'black'}`}>
          <div className="footer__top footer__top-5" >
            <div className="container">
              <div className="row" style={{overflow:"hidden"}}>
                <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6" >
                  <div className="footer__widget footer__widget-5 mb-50 footer-col-5-1">
                    <div className="footer__logo" >
                      <Link href="/">
                        {/* <Image src={style_2 ? logo_black : logo} alt="logo" /> */}
                        <Image height={90} width={150} src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info" style={{ color: "black" }}>
                        <p>Zenka Europe UAB offers contract manufacturing service and distributes wide range of electronic components including excess stocks, obsolete and hard
                          to find products globally.
                        </p>

                        {/* <div className="footer__opening d-flex align-items-start">
                          <div className="footer__opening-icon mr-15">
                            <span>
                              <Opening />
                            </span>
                          </div>
                          <div className="footer__opening-content">
                            <h4>Opening Hours</h4>
                            <p>Mon – Sat 8:00 – 17:30 Sunday – CLOSED</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 pt-13" >
                  <div className=" footer__widget-5 mb-50 footer-col-5-2">
                    <h3 className="footer__widget-title">Information</h3>
                    <div className=" footer__widget-content">
                      <ul className='list-unstyled' >
                        <li ><Link href="/about-us">About us</Link></li>
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6  pt-13">
                  <div className=" footer__widget-5 mb-50 footer-col-5-2">
                    <h3 className="footer__widget-title">Company</h3>
                    <div className=" footer__widget-content">
                      <ul className='list-unstyled' >
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/rfq">RFQ</Link></li>
                        <li><Link href="/manufacturers">Manufacturers</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 pt-13">
                  <div className="footer__widget footer__widget-5 mb-50 footer-col-5-1">
                    <h3 className="footer__widget-title">Get in Touch</h3>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        {/* <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-20">
                            <span>
                              <Call />
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Call us:</h4>
                            <a href="tel:012-345-6789">+964 742 44 763</a>
                          </div>
                        </div> */}
                        <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-5">
                            <span>
                              <Email />
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Email us:</h4>
                            <a href="mailto:info@zenkaeurope.com">info@zenkaeurope.com</a>
                          </div>
                        </div>
                        <div className="footer__info-item d-flex align-items-start">
                          <div className="footer__info-icon mr-5">
                            <span>
                              <LocationTwo />
                            </span>
                          </div>
                          <div className="footer__info-text">
                            <h4>Office:</h4>
                            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/TZPuoEN18GShqpkm6">
                              Girulių g., No.5,
                              Vilnius, Lithuania

                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-5" style={{ backgroundColor: "#4eba65" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="footer__copyright-5">
                    <CopyrightText />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer__social-5 text-sm-end">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;