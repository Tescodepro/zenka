import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleTranslate from "./component/GoogleTranslate";
import Menus from "./menus";
import logo from "@assets/img/logo/logo.png";
import { SearchTwo, Email } from "@svg/index";
import useSticky from "@hooks/use-sticky";
import axios from "axios";
import SearchPopup from "./component/search-popup";
import { useRouter } from "next/router";
import OffCanvasThree from "@components/common/off-canvas/off-canvas-3";

const HeaderTwelve = ({ style_2 = false }) => {
  const router = useRouter();

  const page = router.asPath?.split("/")[1] ?? ""
  const { productList } = router.query;
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { sticky } = useSticky();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartOpenx, setIsCartOpenx] = useState("TR");
  const [aramabaslat, setAramabaslat] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(page == "search" ? productList : "");
  const [searchCheck, setSearchCheck] = useState(false);
  const [inputbasilmadurum, setInputbasilmadurum] = useState(false);
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
    setSearchCheck(true)
  };
  useEffect(() => {
    setSearchValue(page == "search" ? productList : "")
  }, [productList, page]);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {

      let searchValuetemiz = encodeURIComponent(searchValue.replace(/\//g, '|'));

      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValuetemiz}`
    }
  };
  const linkGit = (e) => {
    let searchValuetemiz = encodeURIComponent(searchValue.replace(/\//g, '|'));
    window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValuetemiz}`
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Arama işlemini burada gerçekleştirebilirsiniz
    // Örneğin, arama sonuçlarını bir API'den alabilir veya mevcut ürün listesini filtreleyebilirsiniz
    //http://localhost/milyonluk_proje/api/searchForProducts

    //setSearchResults([...filteredProducts]);
  };

  const onblurfunc = () => {
    setInputbasilmadurum(true)
  }
  const onfocusfunc = () => {
    setTimeout(() => { setInputbasilmadurum(false) }, 100);
    //setInputbasilmadurum(false)
  }
  return (
    <>
      <header>
        <div className={`header__area ${style_2 ? "" : "header__transparent"}`}>
          <div className={`header__bottom-13 p-0  header__black-3 header__bottom-border-4 ${style_2 ? "header__bottom-13-white" : "bg-white"
            } header__sticky ${sticky ? "header-sticky" : ""}`} id="header-sticky" >
            <div className="container-fluid">
              <div className="row align-items-center headergizlici" style={{ backgroundColor: "#4eba65" }}>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-5">
                  <div className="header__info header__info-10">
                    <ul>
                      <li>
                        <span>Welcome to Zenka Europe</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-7">
                  <div className="header__top-right d-flex justify-content-end align-items-center">
                    <div className="header__social-10 d-none d-md-block">
                      <ul>
                        <li>
                          <a href="mailto:info@zenkaeurope.com" style={{ width: "180px" }}>
                            <span>
                              <Email />
                            </span>
                            info@zenkaeurope.com
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
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6">
                    <div className="logo text-center">
                      <Link href="/">
                        <Image height={90} src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6">
                    <div className="header__bottom-right-13 d-flex justify-content-end align-items-center">
                      <div className="header__search-13" style={{ width: "100%" }}>
                        <form className="d-flex flex-column" onSubmit={handleSearchSubmit} >
                          <div className=" d-none position-relative d-md-block d-lg-md d-xl-block d-xxl-block">
                            <input
                              type="text"
                              placeholder="Search for products..."
                              value={searchValue ? searchValue.replace(/\|/g, '/') : ""}
                              onBlur={onfocusfunc}
                              onFocus={onblurfunc}
                              onChange={handleSearchChange}
                              onKeyPress={handleKeyPress}
                            />
                            <button onClick={linkGit} >
                              <SearchTwo />
                            </button>
                          </div>
                          {(inputbasilmadurum && aramabaslat) ? (<><div className="">
                            <ul className="list-group position-absolute w-100  ">
                              <li className="list-group-item list-group-item-action" >
                                Searching..
                              </li>
                            </ul>
                          </div></>) : (searchValue && searchCheck && inputbasilmadurum) ? (
                            <div style={{ zIndex: 9999 }} className="">
                              {backProductList.length > 0 ? (
                                <ul className="list-group position-absolute w-100   ">
                                  {backProductList.map((product) => (
                                    <Link key={product.id} href={`/product/${encodeURIComponent(product.name.replace(/\//g, '|')) + "-" + product.id}`}>
                                      <li onClick={() => setSearchValue('')} className="list-group-item list-group-item-action" >
                                        {product.name}
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              ) : (
                                <div className="">
                                  <ul className="list-group position-absolute w-100  ">
                                    <li className="list-group-item list-group-item-action" >


                                      <Link style={{ color: "blue" }} href={`/contact`}>
                                        Contact
                                      </Link>
                                      &nbsp;or &nbsp;
                                      <Link style={{ color: "blue" }} href={`/rfq`}>
                                        Send RFQ
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : <></>}

                        </form>
                      </div>
                      <div className="header__action-13 d-block d-md-none">
                        <ul>
                          <li className="d-xxl-none">

                            <a
                              style={{ cursor: "pointer" }}
                              className="search-open-btn"
                              onClick={() => setIsSearchOpen(true)}
                            ><SearchTwo /></a>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-20 d-xl-none">


                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>

                    {/* <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                    <div className="main-menu main-menu-13 pl-45 main-menu-ff-space">
                      <nav id="mobile-menu-3">
                        <Menus />
                      </nav>
                    </div>

                  </div> */}
                    <div className="col-xxl-2 col-lg-1 col-xl-1 d-none d-xl-block">

                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center d-none d-xl-block" style={{ backgroundColor: "#4eba65" }}>
                <div className="main-menu main-menu-13 pl-45 main-menu-ff-space">
                  <nav id="mobile-menu-3" className="stt-menu-ust" style={{ height: "39px" }}>
                    <Menus />
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <ReactFlagsSelect
            selected={isCartOpenx}
            onSelect={(code) => setIsCartOpenx(code)}
          />; */}
        </div>
      </header>
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {/* off canvas start */}
      <OffCanvasThree
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}

    </>
  );
};

export default HeaderTwelve;
