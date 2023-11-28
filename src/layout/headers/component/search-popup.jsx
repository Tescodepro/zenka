import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Close, Search } from "@svg/index";
import logo from "@assets/img/logo/logo.png";

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValue}`
    }
  };
  const linkGit = (e) => {
    window.location.href = `${process.env.NEXT_PUBLIC_LOCAL}search/${searchValue}`
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`search__popup ${isSearchOpen ? "search-opened" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className=" d-flex justify-content-between align-items-center">
                <div className="search__logo">

                </div>
                <div
                  className="search__close"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <button
                    type="button"
                    className="search__close-btn search-close-btn"
                  >
                    <Close />
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form onSubmit={handleSubmit}>
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Search for products..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      onKeyPress={handleKeyPress}
                    />
                    <span className="search-focus-border"></span>
                    <button type="submit" onClick={linkGit}>
                      <Search />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
