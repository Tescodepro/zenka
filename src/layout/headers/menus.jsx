
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// internal
import axios from 'axios';

const Menus = () => {
  const [menuData, setMenuData] = useState();
  const [subMenu, setSubMenu] = useState(false);
  const [category, setCategory] = useState();
  const [categorySeoName, setCategorySeoName] = useState();
  const [categorySub, setCategorySub] = useState();
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    getCategory()
    getBackCategory()
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
  const testediyorum = () => {
    setSubMenu(false)
    console.log("loliiii");
  }

  const createSubCatMenu = () => {
    const opts = []
    const opts1 = []
    const opts2 = []
    const subCategory = categorySub?.filter(
      (sub) => sub.category_id === categoryId
    );
    let sayisi = Math.ceil(subCategory.length / 2);
    let sayisi2 = subCategory.length - sayisi;
    for (let i = 0; i < sayisi; i++) {
      opts1.push(
        <li className="list-group-item border border-0 "><Link onClick={() => { testediyorum() }} href={`/category-detail/${subCategory[i].seo_name + "-" + subCategory[i].id}`}>{subCategory[i].name}</Link></li>
      )
    }
    for (let j = sayisi; j < subCategory.length; j++) {
      opts2.push(
        <li className="list-group-item border border-0 "><Link onClick={() => { testediyorum() }} href={`/category-detail/${subCategory[j].seo_name + "-" + subCategory[j].id}`}>{subCategory[j].name}</Link></li>
      )
    }




    opts.push(<div className='row m-0 pt-10'>
      <div className='col-6'>{opts1}</div>
      <div className='col-6'>{opts2}</div>
    </div>)
    // for (let i = 0; i < subCategory.length; i += 2) {
    //   let li1 = subCategory[i] && <li className="list-group-item border border-0 "><Link href={`/category-detail//${subCategory[i].seo_name}`}>{subCategory[i].name}</Link></li>
    //   let li2 = subCategory[i + 1] && <li className="list-group-item border border-0 "><Link href={`/category-detail//${subCategory[i + 1].seo_name}`}>{subCategory[i + 1].name}</Link></li>
    //   opts.push(<ul className="list-group list-group-horizontal border border-0 w-100 pt-2 px-3 pb-2">
    //     {li1}
    //     {li2}
    //   </ul>)
    // }


    return opts

  }

  return (
    <ul>
      {menuData?.map((menu, i) => {
        // console.log('menu',menu)
        return (
          <li key={i} className={`mx-5 stt-menu-alt text-grey-800  ${menu.megaMenu ? ' has-mega-menu' : ''} ${menu.hasDropdown ? 'has-dropdown' : ''}`} onMouseOut={() => (setSubMenu(false))}>
            <Link style={{ paddingTop: "6px", paddingBottom: "6px", color: "#fff", fontWeight: "bold" }} href={menu.link}>
              {menu.title}
            </Link>
            {menu.hasDropdown && <ul className="submenu" style={{ minWidth: 380, height: 400, marginLeft: '-80%' }}>
              {category?.map((sub, i) => (
                <li className='text-grey-800 ' key={i} onMouseOver={() => { setSubMenu(true); setCategoryId(sub.id) }} >
                  <Link href={`/category/${sub.seo_name}`}>
                    <b>{sub.name}</b>
                  </Link>
                </li>
              ))}
            </ul>}
            {subMenu && <ul onMouseOver={() => (setSubMenu(true))} className="submenu" style={{ minWidth: 600, height: 400, marginLeft: '325%', overflowY: 'auto' }}>
              <li>

                {createSubCatMenu()}
              </li>
            </ul>}



          </li>
        )
      })}
    </ul>
  );
};

export default Menus;