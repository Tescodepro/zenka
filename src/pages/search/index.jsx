import React, { useState, useEffect } from 'react';
import { FooterEleven, FooterFour, HeaderTwelve } from '@layout/index';
import { useRouter } from 'next/router';
import SEO from "@components/seo";

import TableSearch from './components/TableSearch';
import FilterCard from './components/FilterCard';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const App = () => {
  const router = useRouter();

  const productList = "";

  const [filterdata, setFilterData] = useState();
  const [filterProps, setFilterProps] = useState();
  const [fielddata, setFieldData] = useState();
  const [title, setTitle] = useState('');
  const getFields = async () => {

    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_fields/${productList}`).then(val => {

      setFieldData(val.data.fields)

    })
  }
  // const getFilters = async () => {
  //   //await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}ProductOfSubCategory`).then(val => setMenuData(val['data']))
  //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_filters_all/${productList}`).then(val => setFilterData(val['data']))
  // }
  useEffect(() => {
    if (productList !== undefined) {
      // getFields()
      //getFilters()
    }
    setTitle(productList);
    // console.log("hop", productList)
  }, [productList])

  const queryClient = new QueryClient();

  return (
    <>
      <HeaderTwelve />
      <SEO pageTitle={'Search List'} />
      <div style={{ paddingTop: 180 }}></div>
      <div className="d-flex inline-flex container mt-4 mb-5 pb-5">
        <div className="search__result-content text-center mb-40">
          <h3 className="search__result-title">
            Search results for: <span> "{productList}"</span>
          </h3>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <TableSearch fields={fielddata} filterProps={filterProps} filterData={filterdata} seoName={productList} />
      </QueryClientProvider>
      <FooterFour />
    </>
  );
};

App.defaultProps = {
  productList: 0,
};

export default App;
