import { HeaderTwelve, FooterFour } from '@layout/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from "@components/seo";


import { AiFillFileText, AiFillHome, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
const ProductDetails = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const router = useRouter();

  const { productId } = router.query;
  useEffect(() => {
    if (productId) {
      getProduct(productId)
    }
  }, [productId])
  const getProduct = async (productId) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}manufacturers_info/tek`, { "deger": productId });
    setPortfolioItems(response.data)
  }
  return (
    <div>
      <HeaderTwelve />
      <SEO pageTitle={"Manufacturers Detail"} />
      <div className="mx-5  mb-3">
        <div style={{ paddingTop: 180 }}></div>

        <div className="row ">
          <div className=" col-sm-12 col-md-3  border-bottom border-top border-start">
            <div className="border-top text-center pt-30 pb-50" >
              <Image alt='image'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '80px' }} src={`https://api.zenkaeurope.com/app/resimler/linecard2/${portfolioItems["resim"]}`}></Image>
            </div>
          </div>
          <div className="  col-sm-12 col-md-9  border">
            <div className="row border-bottom mt-2 p-2"><h4>{portfolioItems["baslik"]}</h4></div>
            <div className="row p-2">

              <div dangerouslySetInnerHTML={{ __html: portfolioItems["aciklama"] }}></div>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </div >
  );
};

export default ProductDetails;
