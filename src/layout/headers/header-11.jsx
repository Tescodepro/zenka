import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Email, Phone, Search } from "@svg/index";
import SearchPopup from "./component/search-popup";
import Menus from "./menus";
import { HeaderSocial } from "@components/social";
import Languages from "./component/languages";
import logo_light from "@assets/img/logo/logo-red.svg";
import logo_dark from "@assets/img/logo/logo-red-black.svg";
import useSticky from "@hooks/use-sticky";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";
import { User, HeartThree, Cart, SearchTwo } from "@svg/index";
import axios from "axios";




import logo from "@assets/img/logo/logo.png";
import GoogleTranslate from "./component/GoogleTranslate";


const HeaderEleven = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [aramabaslat, setAramabaslat] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [backProductList, setBackProductList] = useState([]);



  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value.length > 0) {
      setBackProductList([]);
      setAramabaslat(true)
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND}searchForProducts/`, { kelime: value }).then((response) => {
        setBackProductList(response.data.search);
        setAramabaslat(false)
      });
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValue}`
    }
  };
  const linkGit = (e) => {
    window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValue}`
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Arama işlemini burada gerçekleştirebilirsiniz
    // Örneğin, arama sonuçlarını bir API'den alabilir veya mevcut ürün listesini filtreleyebilirsiniz
    //http://localhost/milyonluk_proje/api/searchForProducts

    //setSearchResults([...filteredProducts]);
  };



  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div className="header__top-10 d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10">
                  <div className="header__info header__info-10">
                    <ul>
                      <li>
                        <span>Welcome to Zenka Europe</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2">
                  <div className="header__top-right d-flex justify-content-end align-items-center">
                    <div className="header__social-10">
                      <ul>
                        <li>
                          <a href="mailto:info@educal.com" style={{ width: "180px" }}>
                            <span>
                              <Email />
                            </span>
                            info@example.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__lang header__lang-10 ml-20">
                      <GoogleTranslate />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`header__bottom-10 header__sticky ${sticky ? "header-sticky" : ""}`} id="header-sticky">
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image className="logo-light" height={90} width={150} src={logo} alt="logo" />
                        <Image className="logo-dark" height={90} width={150} src={logo} alt="logo" />


                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
                    <div className="main-menu main-menu-10 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <div className="header__search-13">
                          <form className="d-flex flex-column" onSubmit={handleSearchSubmit} >
                            <div className=" d-none position-relative d-md-block d-lg-md d-xl-block d-xxl-block">
                              <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchValue}
                                onChange={handleSearchChange}
                                onKeyPress={handleKeyPress}
                              />
                              <button onClick={linkGit} >
                                <SearchTwo />
                              </button>
                            </div>
                            {aramabaslat ? (<><div className="">
                              <ul className="list-group position-absolute w-100  ">
                                <li className="list-group-item list-group-item-action" >
                                  Searching..
                                </li>
                              </ul>
                            </div></>) : searchValue ? (
                              <div style={{ zIndex: 9999 }} className="">
                                {backProductList.length > 0 ? (
                                  <ul className="list-group position-absolute w-100   ">
                                    {backProductList.map((product) => (
                                      <li onClick={() => setSearchValue('')} className="list-group-item list-group-item-action" key={product.id}>
                                        <Link href={`/product/${product.name + "-" + product.id}`}>{product.name}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <div className="">
                                    <ul className="list-group position-absolute w-100  ">
                                      <li className="list-group-item list-group-item-action" >
                                        No results found.
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ) : <></>}

                          </form>
                        </div>

                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                      {/* <div className="header__action-10 d-none d-xl-block">
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
                        </ul>
                      </div> */}
                      <div className="header__hamburger ml-50 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-red offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                      <div className="header__btn-10 ml-30 d-none d-sm-block">
                        <Link href="/contact" className="tp-header-btn-3">
                          Donate
                        </Link>
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

      {/* off canvas start */}
      <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderEleven;
