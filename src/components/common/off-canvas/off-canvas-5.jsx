import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape from "@assets/img/shape/offcanvas-shape-2.png";
import logo from "@assets/img/logo/logo.svg";
import SocialLinks from "@components/social";
import CloseFour from "@svg/close-4";
import MobileMenus from "./mobile-menus";

const OffCanvasFive = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-3 ${isOffCanvasOpen ? "offcanvas-opened" : ""
          }`}
      >
        <div className="offcanvas__shape">
          <Image className="offcanvas__shape-2" src={shape} alt="shape" />
        </div>
        <div className="offcanvas__wrapper offcanvas__wrapper-3">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn-3 offcanvas-close-btn"
            >
              <CloseFour />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image height={60} width={120} loading='eager' src={'/assets/img/logo/zenka-beyaz.png'} />
                </Link>
              </div>
            </div>
            <div className="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
                {/* MobileMenus end*/}
              </div>
            </div>
            <div className="offcanvas__menu offcanvas__menu-3 offcanvas__menu-ff-space d-none d-lg-block">
              <p>Portfolio</p>
              <nav>
                <ul>
                  <li>
                    <Link href="/portfolio">Photojournalism</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-2">Fashion </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-masonry">Still Life</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-gallery">Architectural </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="offcanvas__btn-3">
              <Link href="/services" className="tp-btn-offcanvas-pink">
                See All Features <i className="fa-regular fa-chevron-right"></i>
              </Link>
            </div> */}

            <div className="offcanvas__info mb-50">
              <div className="offcanvas__info-item">
                <h4 className="offcanvas__info-item-title">Information</h4>

                <p>
                  <a href="mailto:info@zenkaeurope.com">info@zenkaeurope.com</a>
                </p>
              </div>
              <div className="offcanvas__info-item">
                <h4 className="offcanvas__info-item-title">Address</h4>
                <p>
                  <a
                    rel="noreferrer"
                    href="https://goo.gl/maps/TZPuoEN18GShqpkm6"
                    target="_blank"
                  >
                    Girulių g., No.5,
                    Vilnius, Lithuania
                  </a>
                </p>
              </div>
            </div>

            <div className="offcanvas__social-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvasFive;
