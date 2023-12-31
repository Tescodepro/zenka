import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo-black.svg";
import SocialLinks from "@components/social";
import CopyrightText from "./component/copyright-text";

const FooterEight = () => {
  return (
    <>
      <footer>
        <div className="footer__area" data-bg-color="footer-bg-grey">
          <div className="footer__top footer__top-9">
            <div className="container">
              <div className="footer__top-9-inner">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-4">
                    <div className="footer__widget footer__widget-9">
                      <div className="footer__logo">
                        <Link href="/">
                          <Image src={logo} alt="logo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-9 col-xl-9 col-lg-6 col-md-8">
                    <div className="footer__widget footer__widget-9">
                      <div className="footer__widget-content">
                        <ul id="footer-list-inline-3">
                          <li>
                            <Link href="/home-portfolio">Home</Link>
                          </li>
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-9">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="footer__copyright-9">
                    <CopyrightText />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="footer__social-9 text-sm-end">
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

export default FooterEight;
