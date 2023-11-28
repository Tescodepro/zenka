import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import electro from "@data/products-electro";
import SingleListProduct from '@components/products/shop-products/single-list-product';
import { FooterEleven, FooterFour, FooterTen, HeaderTwelve } from '@layout/index';
import SubCategoryList from './products/components/SubCategoryList';
import axios from 'axios';
import SEO from '@components/seo';

const prd_list_items = electro.slice(0, 5);

const CategoryPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [filteredSubCategory, setFilteredSubCategory] = useState();
  const [categoryName, setCategoryName] = useState("-");
  useEffect(() => {
    getProduct()
  }, [name])
  const getProduct = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_subcategories/${name}`);
      setFilteredSubCategory(response.data.subcategory);
      setCategoryName(response.data.category.name)
      console.log("degeri : ", response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
  console.log("altlııkk",filteredSubCategory);
  if (!filteredSubCategory) {
    return <div class="custom-loader"></div>;
  }
  if (!filteredSubCategory) {
    // Kategori bulunamadıysa veya geçersizse uygun bir hata mesajı gösterme

    if (!filteredSubCategory) {
      return 'Kategori bulunamadı.';
    } else { }
  }
  return (
    <div className='w-100'>
      <HeaderTwelve />
      <div style={{ paddingTop: 80 }}></div>
      <SEO pageTitle={"Category List"} />
      <div className="shop__main">
        <div className="row pt-110 mx-0">
          <div style={{ height: "35px", marginTop: "-22px", backgroundColor: "#F0F0F0" }}>
            <div className="d-flex inline-flex container">
              <h6 className='text-start mt-2'><a href={`${process.env.NEXT_PUBLIC_LOCAL}`}>Home</a> {">"} {categoryName}</h6>
            </div>
          </div>
          <div className={`col-lg-12 ${'' ? "" : " order-lg-last"}`}>
            <div className="shop__tab-content mb-140">
              <div className="tab-content" id="shop_tab_content">
                <div className="tab-pane container mt-5 fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                  <h2>{filteredSubCategory.main_title}</h2>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className='bg-light'>
                        <tr >
                          <th>Sub Categories</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className='border-bottom border-start border-end '>
                            <SubCategoryList subTitles={filteredSubCategory} />
                            {/* {subTitles.map((vals) => (
                          <div className="container " key={vals.title}>
                            <div className="row">
                              <div className="col-6"></div>
                              <div className="col-6"></div>
                            </div>
                            <Link href={`products/${vals.title.replace(/ /g, '-').replace(/,/g, '')}`}>
                              <span className="mt-10 hover:underline text-dark">{vals.title} <small className='text-muted'>({vals.count})</small></span>
                            </Link>
                          </div>
                        ))} */}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </div>
  );
};

export default CategoryPage;
