import React, { useState, useEffect } from 'react';
import { FooterEleven, FooterFour, HeaderTwelve } from '@layout/index';
import { useRouter } from 'next/router';
import SEO from "@components/seo";

import Table from './components/Table';
import FilterCard from './components/FilterCard';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const App = () => {
  const router = useRouter();

  const { productList } = router.query;

  const [filterdata, setFilterData] = useState();
  const [filterProps, setFilterProps] = useState();
  const [fielddata, setFieldData] = useState();
  const [title, setTitle] = useState('');
  const [categoryName, setCategoryName] = useState({ link: "", label: "-" });
  const [subCategoryName, setSubCategoryName] = useState({ link: "", label: "-" });

  const getFields = async () => {

    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_fields/${productList}`).then(val => {

      setFieldData(val.data.fields)
      setCategoryName({ link: val.data.sub_cat.c_link, label: val.data.sub_cat.c_nm })
      setSubCategoryName({ link: val.data.sub_cat.sc_link, label: val.data.sub_cat.sc_nm })
    })
  }
  // const getFilters = async () => {
  //   //await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}ProductOfSubCategory`).then(val => setMenuData(val['data']))
  //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_filters_all/${productList}`).then(val => setFilterData(val['data']))
  // }
  useEffect(() => {
    if (productList !== undefined) {
      getFields()
      //getFilters()
    }
    setTitle(productList);
    // console.log("hop", productList)
  }, [productList])

  const queryClient = new QueryClient();
  if (!fielddata || fielddata.length === 0) {
    return <div className="custom-loader"></div>; // Veri boş ise alternatif içerik göster
  }

  return (
    <>
      <HeaderTwelve />
      <SEO pageTitle={'Category List'} />
      <div style={{ paddingTop: 190 }}></div>
      <div style={{ height: "35px", marginTop: "-22px", backgroundColor: "#F0F0F0" }}>
        <div className="d-flex inline-flex container">
          <h6 className='text-start mt-2'><a href={`${process.env.NEXT_PUBLIC_LOCAL}`}>Home</a> {">"} <a href={`${process.env.NEXT_PUBLIC_LOCAL}category/${categoryName.link}`}>{categoryName.label}</a> {">"} {subCategoryName.label}</h6>
        </div>
      </div>
      <FilterCard fields={fielddata} seoName={productList} filterData={filterdata} filterProps={filterProps} setFilterProps={setFilterProps} />
      <div className="d-flex inline-flex container mt-4 mb-5 pb-5">
        <h2 className='text-start  '>{subCategoryName.label}</h2>
        {/* <small className='d-flex align-items-center ms-2'>{filterdata?.length} Products Found</small> */}
      </div>
      <QueryClientProvider client={queryClient}>
        <Table fields={fielddata} filterProps={filterProps} filterData={filterdata} seoName={productList} />
      </QueryClientProvider>
      <FooterFour />
    </>
  );
};

App.defaultProps = {
  productList: 0,
};

export default App;
