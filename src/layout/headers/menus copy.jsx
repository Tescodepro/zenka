
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// internal
import axios from 'axios';

const Menus = () => {
  const [menuData, setMenuData] = useState();
  const [category, setCategory] = useState();
  const [categorySeoName, setCategorySeoName] = useState();
  const [categorySub, setCategorySub] = useState();

  useEffect(() => {
    getCategory()
    getBackCategory()
  }, [])
  useEffect(() => {
    getBackSubCategory();
  }, [])
  const getCategory = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}headerCategorys`).then(val => setMenuData(val['data']))
  }
  const getBackCategory = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_categories`).then(val => setCategory(val['data']))
  }
  const getBackSubCategory = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_categoryAllForHeader`).then(val => setCategorySub(val['data']))

  }
  return (
    <ul>
      {menuData?.map((menu, i) => {
        // console.log('menu',menu)
        return (
          <li key={i} className={`text-grey-800  ${menu.megaMenu ? ' has-mega-menu' : ''} ${menu.down ? 'has-dropdown' : ''}`}>
            <Link href={menu.link}>
              {menu.title}
            </Link>
            {menu.hasDropdown && <ul className="submenu">
              {category?.map((sub, i) => (
                <li className='text-grey-800 ' key={i}>
                  <Link href={`/category/${sub.seo_name}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>}
            {menu.mega_menus && (
              <ul className="mega-menu w-100">
                {category?.map((mega, i) => {
                  const subCategory = categorySub?.filter(
                    (sub) => sub.category_id === mega.id
                  );
                  // console.log('subCategory',subCategory)
                  return (
                    <li className='text-grey-800 ' key={i}>
                      <Link href={`/category/${mega.seo_name}`} className="mega-menu-title ">
                        <span className=''>{mega.name}</span>

                      </Link>
                      <ul>
                        {subCategory?.map((subCategory, j) => (
                          <li key={j}>
                            <Link href={`/category-detail/${subCategory.seo_name}`}>
                              {subCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            )}


          </li>
        )
      })}
    </ul>
  );
};

export default Menus;