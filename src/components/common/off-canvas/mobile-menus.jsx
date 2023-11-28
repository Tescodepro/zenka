'use client'
import React, { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
const MobileMenus = ({ closebtn ,isOffCanvasOpen,setIsOffCanvasOpen}) => {

  const [menuData, setMenuData] = useState();
  const [subData, setSubData] = useState();
  useEffect(() => {
    getCategory()
    getBackCategory()
  }, [])
  const getCategory = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}headerCategorys`).then(val => setMenuData(val['data']))
  }
  const getBackCategory = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_categories`).then(val => setSubData(val['data']))
  }


  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
      //closebtn(false)
    } else {
      setNavTitle(menu);

    }
  };
  // openSubMobileMenu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");

    } else {
      setSubMenu(s_menu);
    }
  };
  const clsScreen=()=>{
    setIsOffCanvasOpen(false)
  }
  return (
    <nav className="mean-nav">
      <ul>
        {menuData?.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.hasDropdown && !menu.megaMenu && !menu.pages && (
              <li className="has-dropdown">
                <Link href={menu.link}>{menu.title}</Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {subData?.map((sub, i) => (
                    <li onClick={() =>setIsOffCanvasOpen(false)} key={i}>
                      <Link href={`/category/${sub.seo_name}`}>
                        {sub.seo_name}
                        </Link>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: 'pointer' }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}
            {menu.down === false && <>
              <li onClick={() =>setIsOffCanvasOpen(false)} className="has-dropdown">
                <Link href={menu.link}>{menu.title}</Link>


              </li>
            </>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
