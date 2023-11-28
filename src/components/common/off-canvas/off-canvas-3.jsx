import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@assets/img/logo/logo.png";
import signature from "@assets/img/shape/offcanvas-signature.png";
import SocialLinks from "@components/social";
import MobileMenus from "./mobile-menus";
import CloseThree from "@svg/close-3";

const OffCanvasThree = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-2 ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas__close-btn-2 offcanvas-close-btn"
            >
              <CloseThree />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-60 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
              <Link href="/">
                  <Image height={90} width={150}  src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="mobile-menu-2 fix mb-40 menu-counter mean-container">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus isOffCanvasOpen={isOffCanvasOpen} setIsOffCanvasOpen={setIsOffCanvasOpen} />
                {/* MobileMenus end*/}
              </div>
            </div>

            <div className="offcanvas__info mb-50">
              <div className="offcanvas__info-item">
                <h4 className="offcanvas__info-item-title text-dark">Information</h4>

                <p>
                  <a href="mailto:info@zenkaeurope.com">info@zenkaeurope.com</a>
                </p>
              </div>
              <div className="offcanvas__info-item">
                <h4 className="offcanvas__info-item-title text-dark">Address</h4>
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
            <div className="offcanvas__social">
              <h3 className="offcanvas__social-title">Follow :</h3>
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

export default OffCanvasThree;
