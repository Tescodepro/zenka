import React, { useState, useEffect } from 'react';
import { FooterEleven, FooterFour, HeaderTwelve } from '@layout/index';
import { useRouter } from 'next/router';
import SEO from "@components/seo";
import TableSearch from './components/TableSearch';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import AramaYoksa from './components/aramayoksa';

const App = () => {
  const router = useRouter();
  const { productList } = router.query;
  const lastprod = productList ? productList.replace(/\|/g, '/') : "";
  const [islembeklet, setislembeklet] = useState(true);
  const [gelendata, setgelendata] = useState(0);
  const [filterdata, setFilterData] = useState();
  const [filterProps, setFilterProps] = useState();
  const [fielddata, setFieldData] = useState();
  const [title, setTitle] = useState('');
  const getFields = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_fields/${lastprod}`).then(val => {
      setFieldData(val.data.fields)
    })
  }
  // const getFilters = async () => {
  //   //await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}ProductOfSubCategory`).then(val => setMenuData(val['data']))
  //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_filters_all/${productList}`).then(val => setFilterData(val['data']))
  // }
  useEffect(() => {
    if (lastprod !== undefined) {
      // getFields()
      //getFilters()
    }
    setTitle(lastprod);
    // console.log("hop", productList)

  }, [lastprod])


  useEffect(() => {
  }, [gelendata, islembeklet])

  const queryClient = new QueryClient();

  return (
    <>
      <HeaderTwelve />
      <SEO pageTitle={'Search List'} />
      {(islembeklet || gelendata > 0) ? <>
        <div style={{ paddingTop: 180 }}></div>
        <div className="d-flex inline-flex container mt-4 mb-5 pb-5">
          <div className="search__result-content text-center mb-40">
            <h3 className="search__result-title">
              Search results for: <span> "{lastprod}"</span>
            </h3>
          </div>
        </div>
        <div className={gelendata == 0 ? "d-none" : ""} >

          <QueryClientProvider client={queryClient}>
            <TableSearch setislembeklet={setislembeklet} setgelendata={setgelendata} fields={fielddata} filterProps={filterProps} filterData={filterdata} seoName={lastprod} />
          </QueryClientProvider>

        </div>
      </>
        :
        <>
          <AramaYoksa />
        </>}
      <FooterFour />
    </>
  );
};

App.defaultProps = {
  productList: 0,
};

export default App;
