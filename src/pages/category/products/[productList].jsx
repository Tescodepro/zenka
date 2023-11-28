import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'
import { faker } from '@faker-js/faker';
// import { makeData } from '@data/makeData'
import ProductImage from './columns/ProductImage';
import { FooterEleven, HeaderTwelve } from '@layout/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiFillForward, AiFillBackward } from "react-icons/ai";
import Table from './components/Table'
import FilterCard from './components/FilterCard'

function App() {
  const router = useRouter();
  const { productList } = router.query;
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Image',
            accessor: 'image',
            // Cell: ({ value }) => (
            //   <img src={value} alt="Resim" className="img-thumbnail img-fluid" />
            // ),
            Cell: ({ ...props }) => <ProductImage image_url={props} />,
          },
          {
            Header: 'MODEL',
            accessor: 'firstName',
          },
          {
            Header: 'Series',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Product Status',
            accessor: 'age',
          },
          {
            Header: 'Accessory Type',
            accessor: 'visits',
          },
          {
            Header: 'For Use With/Related Products',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },

        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => {

    // const newData = makeData(50);
    // // Her satır için sahte resim URL'si oluşturma
    // return newData.map(item => ({
    //   ...item,
    //   image: faker.image.imageUrl(),
    // }));

  })

  return (
    <>
      <HeaderTwelve />
      <FilterCard/>
      <div className="d-flex inline-flex container mt-4">
        <h2 className='text-start  '>{productList ? (productList.replace(/-/g, ' ')) : ('')}</h2>
        <small className='d-flex align-items-center ms-2'>{1008} Products Found</small>
      </div>
      {/* <Table columns={columns} data={data} /> */}
      <FooterEleven/>
    </>
  )
}

export default App