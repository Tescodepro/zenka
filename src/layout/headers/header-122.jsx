import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import GoogleTranslate from "./component/GoogleTranslate";
import Menus from "./menus";
import logo from "@assets/img/logo/logo.png";
import { User, HeartThree, Cart, SearchTwo } from "@svg/index";
import useSticky from "@hooks/use-sticky";
import CartSidebar from "@components/common/sidebar/cart-sidebar";
import OffCanvasSix from "@components/common/off-canvas/off-canvas-6";
import axios from "axios";
import OffCanvasTwo from "@components/common/off-canvas/off-canvas-2";
import OffCanvasThree from "@components/common/off-canvas/off-canvas-3";
import OffCanvasFour from "@components/common/off-canvas/off-canvas-4";
import OffCanvasFive from "@components/common/off-canvas/off-canvas-5";
import SearchPopup from "./component/search-popup";
import ReactFlagsSelect from "react-flags-select";


const HeaderTwelveX = ({ style_2 = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { sticky } = useSticky();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartOpenx, setIsCartOpenx] = useState("TR");
  const [aramabaslat, setAramabaslat] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
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
        <div className={`header__area ${style_2 ? "" : "header__transparent"}`}>
          <div
            className={`header__bottom-13 p-0 py-xxl-1 header__black-3 header__bottom-border-4 ${style_2 ? "header__bottom-13-white" : "bg-white"
              } header__sticky ${sticky ? "header-sticky" : ""}`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/">
                        <Image height={90} width={150} src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-13 d-flex justify-content-end align-items-center pl-30">
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
                  </div>

                  <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                    <div className="main-menu main-menu-13 pl-45 main-menu-ff-space">
                      <nav id="mobile-menu-3">
                        <Menus />
                      </nav>
                    </div>

                  </div>
                  <div className="col-xxl-2 col-lg-1 col-xl-1 d-none d-xl-block">
                    <GoogleTranslate />

                  </div>
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


      {/* cart mini area start */}
      <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {/* cart mini area end */}

      {/* off canvas start */}
      <OffCanvasFive
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </>
  );
};

export default HeaderTwelveX;
