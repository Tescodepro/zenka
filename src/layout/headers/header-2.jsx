'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchTwo } from "@svg/index";
import logo from "@assets/img/logo/logo.png";
import Menus from "./menus";
import OffCanvasTwo from "@components/common/off-canvas/off-canvas-2";
import useSticky from "@hooks/use-sticky";
import axios from "axios";
import GoogleTranslate from "./component/GoogleTranslate";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [backProductList, setBackProductList] = useState([]);
  const [filterProductId, setFilterProductId] = useState('');
  const productList = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // Diğer ürünler...
  ];
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND}searchForProducts/`, { kelime: searchValue }).then((response) => {
      console.log('filter search', response.data.search)
      setBackProductList(response.data.search);
      setSearchResults([...response.data.search]);
    });
    //  axios.post(`${process.env.NEXT_PUBLIC_BACKEND}searchForProducts/`, searchValue).then((val => setBackProductList(val)));
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
        <div className="header__area">
          <div style={{ background: '#fff' }} className="header__top-4  ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-4 col-6">
                  <div
                    style={{
                      height: '120px',
                      width: ' 270px',
                      flexShrink: '0'
                    }}
                    className="logo p-3">
                    <Link href={"/"}>
                      <Image height={90} width={150} src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>

                <div className="col-xxl-8 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4">
                  <div className="header__bottom-right-13 d-flex  align-items-center justify-content-between">

                    <div className="header__search-13">
                      <form className="d-flex flex-column" onSubmit={handleSearchSubmit} >
                        <div className=" d-none position-relative d-md-block d-lg-md d-xl-block d-xxl-block">
                          <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchValue}
                            onChange={handleSearchChange}
                          />
                          <button type="submit">
                            <SearchTwo />
                          </button>
                        </div>
                        {searchValue ? (
                          <div style={{ zIndex: 9999 }} className="">
                            {backProductList.length > 0 ? (
                              <ul className="list-group position-absolute w-100   ">
                                {backProductList.map((product) => (
                                  <li onClick={() => setSearchValue('')} className="list-group-item list-group-item-action" key={product.id}>
                                    <Link href={`/product/${product.PartNumber}`}>{product.name}</Link>
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
                       {/* ALT BAR START */}
                       <div style={{ backgroundColor: '#47817F',color: '#000000' }} className="header__bottom-4 d-none d-lg-block text-center align-items-center  ">
                      <div className="container align-items-center">
                        <div className="mega-menu-wrapper ">
                          <div className="row align-items-center">
                            <div className="col-xxl-12 col-xl-9 col-lg-9 ">
                              <div className="main-menu main-menu-4 main-menu-ff-space d-inline-flex ">
                                <nav className="d-flex align-items-center justify-content-center ">
                                  <Menus />
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ALT BAR END */}
                    <div className="header__translate">
                      <GoogleTranslate />
                    </div>

                    {/* <div className="header__action-13 d-none d-md-block">
                      <ul>
                        <li className="d-xxl-none">
                          <a href="#">
                            <SearchTwo />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="header__hamburger pl-90 d-lg-none d-xl-none">
                      <button
                        onClick={() => setIsOffCanvasOpen(true)}
                        type="button"
                        className="hamburger-btn  offcanvas-open-btn "
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                 
                  </div>

                </div>

                <div className="col-xxl-5 col-xl-5 col-lg-3 d-none d-lg-block">

                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-6">

                </div>

              </div>

            </div>
          </div>

          <div
            className={`header__style-4 header__sticky  ${sticky ? "header-sticky" : ""
              }`}
            id="header-sticky"
          >

            <div className="container">

              <div className="mega-menu-wrapper p-relative">

                <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-6">
                    <div className="logo">
                      <Link href="/">
                        <Image height={90} width={150} src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-7 col-lg-7 d-none d-lg-block">
                    <div className="main-menu main-menu-4 main-menu-ff-space">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-6">
                    <div className="header__style-4-right d-flex align-items-center justify-content-end">
                      {/* <div className="header__btn-4 text-end d-none d-lg-block">
                        <Link href="/contact" className="tp-btn-brown">
                          Free Consultation
                        </Link>
                      </div> */}
                      <div className="header__hamburger ml-50 d-lg-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-brown offcanvas-open-btn"
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

      {/* off canvas start */}
      <OffCanvasTwo
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;
