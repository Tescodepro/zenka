import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Search } from "@svg/index";
import HeaderInfo from "./component/header-info";
import Languages from "./component/languages";
import SearchPopup from "./component/search-popup";
import Menus from "./menus";
import OffCanvasMain from "@components/common/off-canvas";
// logo
import logoLight from "@assets/img/logo/logo.svg";
import logoDark from "@assets/img/logo/logo-black.svg";
import useSticky from "@hooks/use-sticky";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";

const Header = ({
  header_solid = false,
  transparent,
  header_solid_2,
  header_black,
  top_bar = true,
  commonOffCanvas=false
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div
          className={`header__area ${
            header_solid ? "header__white-solid" : "header__transparent"
          } ${header_solid_2 ? header_solid_2 : ""} ${
            header_black ? "header__black" : ""
          }`}
        >
          {top_bar && (
            <div className="header__top header__border d-none d-lg-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
                    <HeaderInfo />
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2">
                    <div className="header__top-right d-flex justify-content-end align-items-center">
                      <div className="header__lang ml-30">
                        <Languages />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className={`header__bottom header__sticky ${
              header_solid
                ? ""
                : `header__bottom-border${transparent ? "-3" : ""}`
            } ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo logo-border">
                      <Link href={`/`}>
                        {!header_solid && !header_black && (
                          <Image
                            className="logo-light"
                            src={logoLight}
                            alt="logo"
                          />
                        )}
                        <Image
                          className={
                            header_solid ? "" : header_black ? "" : "logo-dark"
                          }
                          src={logoDark}
                          alt="logo"
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu pl-55 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      <div className="header__action d-none d-xl-block">
                        <ul>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              className="search-open-btn"
                              onClick={() => setIsSearchOpen(true)}
                            >
                              <Search />
                            </a>
                          </li>
                          <li>
                            <button
                              onClick={() => setIsOffCanvasOpen(true)}
                              type="button"
                              className={`hamburger-btn ${
                                header_solid || header_black
                                  ? "hamburger-btn-black"
                                  : ""
                              } offcanvas-open-btn`}
                            >
                              <span></span>
                              <span></span>
                              <span></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className={`hamburger-btn ${
                            header_solid || header_black
                              ? "hamburger-btn-black"
                              : ""
                          } offcanvas-open-btn`}
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search modal start */}
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {/* search modal end */}

      {/* full canvas area start */}
      {commonOffCanvas ? (
        <OffCanvasSix
          isOffCanvasOpen={isOffCanvasOpen}
          setIsOffCanvasOpen={setIsOffCanvasOpen}
        />
      ) : (
        <OffCanvasMain
          isOffCanvasOpen={isOffCanvasOpen}
          setIsOffCanvasOpen={setIsOffCanvasOpen}
        />
      )}
      {/* full canvas area end */}
    </>
  );
};

export default Header;
